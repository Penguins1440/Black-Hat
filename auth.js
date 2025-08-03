// Authentication utility functions
class AuthManager {
  constructor() {[
    this.sessionKey = 'loggedInUser',
    this.validUsers = 
      {
        email: 'yugantaghimire81@uniglobecollege.edu.np',
        password: 'password123',
        name: 'Yuganta Ghimire',
        role: 'student'
      },
      {
        email: 'sukrinthapa81@uniglobecollege.edu.np',
        password: 'halaagula',
        name: "Sukrin Thapa",
        role : 'dada'
      }
    ];
  }

  // Check if user is logged in
  isLoggedIn() {
    const user = sessionStorage.getItem(this.sessionKey);
    return user !== null;
  }

  // Get current user data
  getCurrentUser() {
    const user = sessionStorage.getItem(this.sessionKey);
    return user ? JSON.parse(user) : null;
  }

  // Login user
  login(email, password) {
    const user = this.validUsers.find(u => u.email === email && u.password === password);
    
    if (user) {
      const sessionData = {
        email: user.email,
        name: user.name,
        role: user.role,
        loginTime: new Date().toISOString()
      };
      
      sessionStorage.setItem(this.sessionKey, JSON.stringify(sessionData));
      return { success: true, user: sessionData };
    }
    
    return { success: false, message: 'Invalid email or password' };
  }

  // Logout user
  logout() {
    sessionStorage.removeItem(this.sessionKey);
    return { success: true };
  }

  // Require authentication (redirect if not logged in)
  requireAuth() {
    if (!this.isLoggedIn()) {
      alert('Please login to access this page');
      window.location.href = 'login_mis.html';
      return false;
    }
    return true;
  }

} 