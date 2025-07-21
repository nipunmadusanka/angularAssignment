## Project Overview

This project is an Angular application for user management, including authentication, and CRUD operations for users, roles, and statuses.

## Implemented Features

*   Defined data models for users, roles, and statuses.
*   Implemented authentication service with login, logout, token handling, and role checking.
*   Implemented an HTTP interceptor to attach JWT token to requests (using functional interceptor).
*   Implemented a login component with a form.
*   Implemented authentication guard to protect routes.
*   Implemented admin guard to protect admin-specific routes.
*   Implemented user service with CRUD methods.
*   Implemented a basic user list component with user display and client-side search.
*   Created basic structure for user form dialog component.
*   Created basic structure for confirmation dialog component.
*   Implemented role type service with CRUD methods.
*   Implemented status service with CRUD methods.
*   Implemented a basic role type list component with display.
*   Implemented a basic status list component with display.
*   Configured application routes with guards.
*   Added basic navigation links in `app.html`.

## Current Plan

**Phase 3: User Management (Main Feature)** (Continued)

*   Integrate User Form Dialog and Confirmation Dialog with Angular Material Dialogs (requires manual Angular Material installation).
*   Implement opening and handling of User Form Dialog for Add/Edit in UserListComponent.
*   Implement opening and handling of Confirmation Dialog for Delete in UserListComponent.

**Phase 4: RoleType & Status Management (Admin Only)** (Continued)

*   Implement dialogs for adding, editing, and deleting roles and statuses (requires manual Angular Material installation and integration).

**Phase 6: Styling & User Experience**

1.  Basic Styling: Apply basic styles and ensure responsiveness.
2.  User Feedback: Implement loading indicators and messages.
