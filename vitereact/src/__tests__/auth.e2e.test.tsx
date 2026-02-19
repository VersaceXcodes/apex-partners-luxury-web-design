import React from 'react';
import { describe, it, expect, beforeEach } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { BrowserRouter } from 'react-router-dom';

import UV_Login from '@/components/views/UV_Login';
import UV_Dashboard from '@/components/views/UV_Dashboard';
import { useAppStore } from '@/store/main';

const LoginWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <BrowserRouter>{children}</BrowserRouter>
);

describe('Auth E2E Flow (Vitest, real API)', () => {
  beforeEach(() => {
    // Clear localStorage to ensure clean state
    localStorage.clear();
    
    // Reset Zustand store to initial unauthenticated state
    useAppStore.setState((state) => ({
      authentication_state: {
        ...state.authentication_state,
        auth_token: null,
        current_user: null,
        authentication_status: {
          is_authenticated: false,
          is_loading: false,
        },
        error_message: null,
      },
    }));
  });

  it('completes full auth flow: register -> logout -> sign-in', async () => {
    // Generate unique email to avoid duplicate user conflicts
    const uniqueEmail = `user${Date.now()}@example.com`;
    const testPassword = 'TestPassword123!';
    const testName = 'Test User';

    // ========== STEP 1: REGISTER ==========
    const { unmount: unmountLogin } = render(<UV_Login />, { wrapper: LoginWrapper });

    // Wait for form to be ready (not loading)
    await waitFor(() => {
      const state = useAppStore.getState();
      expect(state.authentication_state.authentication_status.is_loading).toBe(false);
    });

    // Find and verify register mode toggle button exists
    const toggleButton = await screen.findByRole('button', { 
      name: /don't have an account\? sign up/i 
    });
    
    const user = userEvent.setup();
    
    // Switch to register mode
    await user.click(toggleButton);
    
    // Wait for register form to appear
    await waitFor(() => {
      expect(screen.getByText(/create your account/i)).toBeInTheDocument();
    });

    // Fill in registration form
    const nameInput = await screen.findByPlaceholderText(/full name/i);
    const emailInput = await screen.findByPlaceholderText(/email address/i);
    const passwordInput = await screen.findByPlaceholderText(/password/i);
    
    await user.clear(nameInput);
    await user.type(nameInput, testName);
    await user.clear(emailInput);
    await user.type(emailInput, uniqueEmail);
    await user.clear(passwordInput);
    await user.type(passwordInput, testPassword);

    // Submit registration
    const submitButton = await screen.findByRole('button', { name: /create account/i });
    await user.click(submitButton);

    // Wait for loading state
    await waitFor(() => {
      expect(screen.getByText(/creating account/i)).toBeInTheDocument();
    }, { timeout: 5000 });

    // Wait for registration to complete and user to be authenticated
    await waitFor(
      () => {
        const state = useAppStore.getState();
        expect(state.authentication_state.authentication_status.is_authenticated).toBe(true);
        expect(state.authentication_state.auth_token).toBeTruthy();
        expect(state.authentication_state.current_user).toBeTruthy();
        expect(state.authentication_state.current_user?.email).toBe(uniqueEmail);
        expect(state.authentication_state.current_user?.name).toBe(testName);
      },
      { timeout: 20000 }
    );

    // Clean up login component
    unmountLogin();

    // ========== STEP 2: LOGOUT ==========
    // Render dashboard to test logout
    const { unmount: unmountDashboard } = render(<UV_Dashboard />, { wrapper: LoginWrapper });

    // Verify user is shown in dashboard
    await waitFor(() => {
      expect(screen.getByText(new RegExp(`Welcome back, ${testName}!`, 'i'))).toBeInTheDocument();
      expect(screen.getByText(new RegExp(uniqueEmail, 'i'))).toBeInTheDocument();
    });

    // Find and click logout button
    const logoutButton = await screen.findByRole('button', { name: /sign out/i });
    await user.click(logoutButton);

    // Verify logout was successful
    await waitFor(() => {
      const state = useAppStore.getState();
      expect(state.authentication_state.authentication_status.is_authenticated).toBe(false);
      expect(state.authentication_state.auth_token).toBeNull();
      expect(state.authentication_state.current_user).toBeNull();
    });

    // Clean up dashboard component
    unmountDashboard();

    // ========== STEP 3: SIGN-IN ==========
    // Render login view again for sign-in
    render(<UV_Login />, { wrapper: LoginWrapper });

    // Ensure we're in sign-in mode (not register mode)
    await waitFor(() => {
      expect(screen.getByText(/sign in to your account/i)).toBeInTheDocument();
    });

    // Fill in sign-in form with the same credentials
    const signInEmailInput = await screen.findByPlaceholderText(/email address/i);
    const signInPasswordInput = await screen.findByPlaceholderText(/password/i);
    
    await user.clear(signInEmailInput);
    await user.type(signInEmailInput, uniqueEmail);
    await user.clear(signInPasswordInput);
    await user.type(signInPasswordInput, testPassword);

    // Submit sign-in
    const signInButton = await screen.findByRole('button', { name: /sign in/i });
    await user.click(signInButton);

    // Wait for loading state
    await waitFor(() => {
      expect(screen.getByText(/signing in/i)).toBeInTheDocument();
    }, { timeout: 5000 });

    // Wait for sign-in to complete and user to be authenticated again
    await waitFor(
      () => {
        const state = useAppStore.getState();
        expect(state.authentication_state.authentication_status.is_authenticated).toBe(true);
        expect(state.authentication_state.auth_token).toBeTruthy();
        expect(state.authentication_state.current_user).toBeTruthy();
        expect(state.authentication_state.current_user?.email).toBe(uniqueEmail);
        expect(state.authentication_state.current_user?.name).toBe(testName);
      },
      { timeout: 20000 }
    );
  }, 60000); // Extended timeout for full E2E flow

  it('handles registration with existing email (should fail)', async () => {
    // Use a predictable email that we'll register twice
    const duplicateEmail = `duplicate${Date.now()}@example.com`;
    const testPassword = 'TestPassword123!';
    const testName = 'Duplicate User';

    // First registration
    const { unmount: unmount1 } = render(<UV_Login />, { wrapper: LoginWrapper });

    const user = userEvent.setup();

    // Switch to register mode
    const toggleButton1 = await screen.findByRole('button', { 
      name: /don't have an account\? sign up/i 
    });
    await user.click(toggleButton1);

    await waitFor(() => {
      expect(screen.getByText(/create your account/i)).toBeInTheDocument();
    });

    // Fill form
    const nameInput1 = await screen.findByPlaceholderText(/full name/i);
    const emailInput1 = await screen.findByPlaceholderText(/email address/i);
    const passwordInput1 = await screen.findByPlaceholderText(/password/i);
    
    await user.type(nameInput1, testName);
    await user.type(emailInput1, duplicateEmail);
    await user.type(passwordInput1, testPassword);

    const submitButton1 = await screen.findByRole('button', { name: /create account/i });
    await user.click(submitButton1);

    // Wait for first registration to succeed
    await waitFor(
      () => {
        const state = useAppStore.getState();
        expect(state.authentication_state.authentication_status.is_authenticated).toBe(true);
      },
      { timeout: 20000 }
    );

    // Logout
    const logoutUser = useAppStore.getState().logout_user;
    logoutUser();

    unmount1();

    // Second registration with same email
    render(<UV_Login />, { wrapper: LoginWrapper });

    const toggleButton2 = await screen.findByRole('button', { 
      name: /don't have an account\? sign up/i 
    });
    await user.click(toggleButton2);

    await waitFor(() => {
      expect(screen.getByText(/create your account/i)).toBeInTheDocument();
    });

    const nameInput2 = await screen.findByPlaceholderText(/full name/i);
    const emailInput2 = await screen.findByPlaceholderText(/email address/i);
    const passwordInput2 = await screen.findByPlaceholderText(/password/i);
    
    await user.clear(nameInput2);
    await user.type(nameInput2, 'Another User');
    await user.clear(emailInput2);
    await user.type(emailInput2, duplicateEmail);
    await user.clear(passwordInput2);
    await user.type(passwordInput2, testPassword);

    const submitButton2 = await screen.findByRole('button', { name: /create account/i });
    await user.click(submitButton2);

    // Wait for error message about duplicate email
    await waitFor(
      () => {
        expect(screen.getByText(/user with this email already exists/i)).toBeInTheDocument();
        const state = useAppStore.getState();
        expect(state.authentication_state.authentication_status.is_authenticated).toBe(false);
        expect(state.authentication_state.error_message).toBeTruthy();
      },
      { timeout: 10000 }
    );
  }, 60000);

  it('handles login with invalid credentials (should fail)', async () => {
    render(<UV_Login />, { wrapper: LoginWrapper });

    const user = userEvent.setup();

    // Try to login with non-existent credentials
    const emailInput = await screen.findByPlaceholderText(/email address/i);
    const passwordInput = await screen.findByPlaceholderText(/password/i);
    
    await user.type(emailInput, 'nonexistent@example.com');
    await user.type(passwordInput, 'wrongpassword');

    const submitButton = await screen.findByRole('button', { name: /sign in/i });
    await user.click(submitButton);

    // Wait for error message
    await waitFor(
      () => {
        expect(screen.getByText(/invalid email or password/i)).toBeInTheDocument();
        const state = useAppStore.getState();
        expect(state.authentication_state.authentication_status.is_authenticated).toBe(false);
        expect(state.authentication_state.error_message).toBeTruthy();
      },
      { timeout: 10000 }
    );
  }, 30000);

  it('persists authentication state in localStorage', async () => {
    const uniqueEmail = `persist${Date.now()}@example.com`;
    const testPassword = 'TestPassword123!';
    const testName = 'Persist User';

    const { unmount } = render(<UV_Login />, { wrapper: LoginWrapper });

    const user = userEvent.setup();

    // Register
    const toggleButton = await screen.findByRole('button', { 
      name: /don't have an account\? sign up/i 
    });
    await user.click(toggleButton);

    await waitFor(() => {
      expect(screen.getByText(/create your account/i)).toBeInTheDocument();
    });

    const nameInput = await screen.findByPlaceholderText(/full name/i);
    const emailInput = await screen.findByPlaceholderText(/email address/i);
    const passwordInput = await screen.findByPlaceholderText(/password/i);
    
    await user.type(nameInput, testName);
    await user.type(emailInput, uniqueEmail);
    await user.type(passwordInput, testPassword);

    const submitButton = await screen.findByRole('button', { name: /create account/i });
    await user.click(submitButton);

    // Wait for registration
    await waitFor(
      () => {
        const state = useAppStore.getState();
        expect(state.authentication_state.authentication_status.is_authenticated).toBe(true);
      },
      { timeout: 20000 }
    );

    // Check that auth data is in localStorage
    const storageData = localStorage.getItem('app-auth-storage');
    expect(storageData).toBeTruthy();
    
    if (storageData) {
      const parsedData = JSON.parse(storageData);
      expect(parsedData.state.authentication_state.auth_token).toBeTruthy();
      expect(parsedData.state.authentication_state.current_user.email).toBe(uniqueEmail);
    }

    unmount();
  }, 60000);
});
