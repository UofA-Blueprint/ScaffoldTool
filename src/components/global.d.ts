declare global {
    interface Window {
      firebaseui_instance?: firebaseui.auth.AuthUI;
    }
  }
  
  export {};