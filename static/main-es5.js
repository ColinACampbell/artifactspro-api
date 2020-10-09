(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<router-outlet></router-outlet>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/home/header/header.component.html":
  /*!*****************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/header/header.component.html ***!
    \*****************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppHomeHeaderHeaderComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<mat-toolbar style=\"background-color: #3597fa; color: white;\">\n    <mat-toolbar-row style=\"display: flex; justify-content: space-between;\">\n        <span> Artifacts Pro</span>\n        <span style=\"float:right;\">\n            <button mat-button matTooltip=\"Hold on, we're not ready yet...\"> Features </button>\n            <button mat-button matTooltip=\"Hold on, we're not ready yet...\"> Pricing</button>\n        </span>\n    </mat-toolbar-row>\n</mat-toolbar>\n\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/home/landing-page/landing-page.component.html":
  /*!*****************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/landing-page/landing-page.component.html ***!
    \*****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppHomeLandingPageLandingPageComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-header></app-header>\n<div class=\"intro-page\">\n    <div class=\"intro-img\">\n        <img class=\"img\" src=\"./../../../assets/undraw_upload_87y9.svg\" width=\"500\" />\n    </div>\n    <div class=\"intro-container\">\n        <h1 class=\"intro\">\n            Document Control and Versioning... <br /> <span class=\"emph\"> Like A Pro </span>\n            <br/>\n            <div>\n                <a class=\"action-btn\" mat-raised-button routerLink=\"/signup\" color=\"primary\"> Sign Up </a>\n                <a class=\"action-btn\" mat-button routerLink=\"/login\"> Login </a>\n            </div>\n        </h1>\n    </div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/home/login/login.component.html":
  /*!***************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/login/login.component.html ***!
    \***************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppHomeLoginLoginComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-header></app-header>\n<div class=\"container\">\n    \n    <div style=\"width: 500px;\">\n        <div>\n            <h1 style=\"text-align: center;\"> Login </h1>\n        </div>\n        <div>\n            <h4 style=\"text-align: center;\"> Please Enter Your Login Credentials </h4>\n        </div>\n        <p>\n            <mat-form-field appearance=\"outline\" [style.width.px]=500>\n                <mat-label>Enter Your Email Address</mat-label>\n                <input matInput placeholder=\"Please enter your email\" [type]='email' #email>\n                <mat-icon matSuffix>account_circle</mat-icon>\n                <mat-hint>Enter Email</mat-hint>\n            </mat-form-field>\n        </p>\n        <p>\n            <mat-form-field appearance=\"outline\" [style.width.px]=500 >\n                <mat-label>Please Enter a Password</mat-label>\n                <input matInput placeholder=\"Please enter a secure password\" [type]=\"'password'\" #password>\n                <mat-icon matSuffix>lock</mat-icon>\n                <mat-hint>Enter Password</mat-hint>\n            </mat-form-field>\n        </p>\n        <p style=\"text-align:center\">\n            <button mat-raised-button color=\"primary\" (click)=\"login(email.value,password.value)\"> Login </button>\n        </p>\n    </div>\n    <div class=\"img\">\n        <img width=\"500\" src=\"./../../../assets/undraw_unlock_24mb.svg\">\n    </div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/home/noaccess/noaccess.component.html":
  /*!*********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/noaccess/noaccess.component.html ***!
    \*********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppHomeNoaccessNoaccessComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div style=\"display: flex;justify-content: center;\">\n    <img src='./../../../assets/undraw_not_found_60pq.svg' width=\"500\" style=\"margin-top: 50px;\">\n\n</div>\n<div style=\"display: flex;justify-content: center;\">\n    <mat-card style=\"text-align: center;margin-top: 20px;\"> \n        <h1> Sorry You Don't Have Access To This Resource </h1>\n    </mat-card>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/home/signup/signup-action/signup-action.component.html":
  /*!**************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/signup/signup-action/signup-action.component.html ***!
    \**************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppHomeSignupSignupActionSignupActionComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-header></app-header>\n<div class=\"container\">\n\n    <div style=\"width: 90%;\">\n        <div class=\"container\">\n\n            <div style=\"width: 80%;\">\n                <div>\n                    <h1 style=\"text-align: center;\"> I would like to </h1>\n                </div>\n                <mat-tab-group mat-align-tabs=\"center\">\n                    <mat-tab label=\"Create Organization/Business\">\n                        <div class=\"tab-item\">\n                            <div>\n                                <p>\n                                    <mat-form-field appearance=\"outline\" [style.width.px]=500>\n                                        <mat-label> Enter Name of Organization/Business</mat-label>\n                                        <input matInput placeholder=\"Name of Organization\" [type]=\"'text'\" #name>\n                                        <mat-icon matSuffix>apartment</mat-icon>\n                                        <mat-hint>Enter Email</mat-hint>\n                                    </mat-form-field>\n                                </p>\n                                <p>\n                                    <mat-form-field appearance=\"outline\" [style.width.px]=500>\n                                        <mat-label> Create Organization Key *</mat-label>\n                                        <input matInput placeholder=\"Please enter a Organization key\" [type]=\"'text'\" #key>\n                                        <mat-icon matSuffix>vpn_key</mat-icon>\n                                        <mat-hint> This is a unique username for your business</mat-hint>\n                                    </mat-form-field>\n                                </p>\n                                <p>\n                                    <mat-form-field appearance=\"outline\" [style.width.px]=500>\n                                        <mat-label> Create Organization Pass key *</mat-label>\n                                        <input matInput placeholder=\"Please enter a secure password\" [type]=\"'password'\" #passKey>\n                                        <mat-icon matSuffix>lock</mat-icon>\n                                        <mat-hint> This is the password for your business. Keep it safe</mat-hint>\n                                    </mat-form-field>\n                                </p>\n                                <div class=\"container\">\n                                    <button mat-raised-button color=\"primary\" (click)=\"createOrganization(name.value,key.value,passKey.value)\"> Create Organization </button>\n                                </div>\n                            </div>\n                        </div>\n                    </mat-tab>\n                    <mat-tab label=\"Join Organization (Using Code)\">\n                        <div class=\"tab-item\">\n                            <div>\n                                <p>\n                                    <mat-form-field appearance=\"outline\" [style.width.px]=500>\n                                        <mat-label> Create Organization Key *</mat-label>\n                                        <input matInput placeholder=\"Please enter a Organization key\" [type]=\"'text'\"\n                                            #password>\n                                        <mat-icon matSuffix>vpn_key</mat-icon>\n                                        <mat-hint> This is a unique username for your business</mat-hint>\n                                    </mat-form-field>\n                                </p>\n                                <p>\n                                    <mat-form-field appearance=\"outline\" [style.width.px]=500>\n                                        <mat-label> Create Organization Pass key *</mat-label>\n                                        <input matInput placeholder=\"Please enter a secure password\" [type]=\"'password'\"\n                                            #password>\n                                        <mat-icon matSuffix>lock</mat-icon>\n                                        <mat-hint> This is the password for your business. Keep it safe</mat-hint>\n                                    </mat-form-field>\n                                </p>\n                                <div class=\"container\">\n                                    <button mat-raised-button color=\"primary\"> Login To Organization </button>\n                                </div>\n                            </div>\n                        </div>\n                    </mat-tab>\n                </mat-tab-group>\n            </div>\n        </div>\n    </div>\n\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/home/signup/signup.component.html":
  /*!*****************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/signup/signup.component.html ***!
    \*****************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppHomeSignupSignupComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-header></app-header>\n<div class=\"container\">\n    \n    <div style=\"width: 500px;\">\n        <div>\n            <h1 style=\"text-align: center;\"> Let's Get Started </h1>\n        </div>\n        <div>\n            <h4 style=\"text-align: center;\"> Enter Your Email So we can start cooking </h4>\n        </div>\n        <p>\n            <mat-form-field appearance=\"outline\" [style.width.px]=500>\n                <mat-label>Enter Your Email Address</mat-label>\n                <input matInput placeholder=\"Please enter your email\" [type]=\"'email'\" #email>\n                <mat-icon matSuffix>account_circle</mat-icon>\n                <mat-hint>Enter Email</mat-hint>\n            </mat-form-field>\n        </p>\n        <p>\n            <mat-form-field appearance=\"outline\" [style.width.px]=500 >\n                <mat-label>Please Enter a Password</mat-label>\n                <input matInput placeholder=\"Please enter a secure password\" [type]=\"'password'\" #password>\n                <mat-icon matSuffix>lock</mat-icon>\n                <mat-hint>Enter Password</mat-hint>\n            </mat-form-field>\n        </p>\n        <p style=\"text-align:center\">\n            <button mat-raised-button color=\"primary\" (click)=\"signup(email.value,password.value)\"> Sign Up </button>\n        </p>\n    </div>\n    <div class=\"img\">\n        <img width=\"500\" src=\"./../../../assets/undraw_reviewed_docs_neeb.svg\">\n    </div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/main/components/artifact/artifact.component.html":
  /*!********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/main/components/artifact/artifact.component.html ***!
    \********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppMainComponentsArtifactArtifactComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-main-header></app-main-header>\n<mat-toolbar color='primary'>\n  <mat-toolbar-row>\n    <span *ngIf=\"artifact\"> <button mat-button (click)='goBack()'> <mat-icon>keyboard_arrow_left</mat-icon> </button> Artifact / {{ artifact.name }} / <span *ngIf=\"selectedDocument\">\n        {{ selectedDocument.version }}</span> </span>\n    <div class=\"util-bar\">\n      <button matTooltip=\"Upload Document Version\" mat-flat-button color='primary' (click)='openUploadDialog()'>\n        <mat-icon> cloud_upload </mat-icon>\n      </button>\n      <button matTooltip='Search Options' mat-button>\n        <mat-icon>search</mat-icon>\n      </button>\n      <button matTooltip='Artifact Info' mat-button>\n        <mat-icon>info</mat-icon>\n      </button>\n      <button matTooltip='Delete Artifact' mat-raised-button color='warn' (click)='openDeleteDialogue()'>\n        <mat-icon>delete</mat-icon>\n      </button>\n    </div>\n  </mat-toolbar-row>\n</mat-toolbar>\n\n<div style=\"display: flex; justify-content: center;\">\n\n  <mat-list class=\"doc-list\">\n    <div mat-subheader style=\"justify-content:flex-start;\">\n      Documents\n    </div>\n    <mat-divider></mat-divider>\n    <mat-list-item *ngFor=\"let document of documents\" (click)=\"selectDocument(document)\">\n      <mat-icon mat-list-icon>library_books</mat-icon>\n      <div mat-line>{{ document.version }}</div>\n      <div mat-line>{{ document.modified }}</div>\n      <mat-divider></mat-divider>\n    </mat-list-item>\n    <mat-divider></mat-divider>\n  </mat-list>\n\n  <div style=\"width: 60%;\">\n    <div class=\"artifact-view-absent\" *ngIf=\"!docSelected\">\n      <div>\n        <img width=\"300\" src=\"./../../../assets/doc_search.svg\">\n        <h3 style=\"text-align: center;\"> No Document Selected </h3>\n      </div>\n    </div>\n\n    <div *ngIf=\"docSelected\" class=\"artifact-view\">\n      <div style=\"width: 100%;\">\n        <div style=\"text-align: left;\">\n          <h1> {{ artifact.name }} / {{ selectedDocument.version }}</h1>\n          <h4> {{ selectedDocument.date_created }}</h4>\n        </div>\n        <div>\n          <b> Preview </b>\n          <!---\n          <div style=\"display: flex; justify-content: center; align-items: center;\">\n            <img src='{{previewlink}}' width=\"400\" />\n          </div>\n          -->\n          <div  >\n            <!--<ngx-doc-viewer *ngIf='!isImage' class='margin-vertical' [url]=\"previewlink\" viewer=\"google\" style=\"width:100%;height:50vh;\">\n            </ngx-doc-viewer>-->\n            <ngx-extended-pdf-viewer [src]=\"previewlink\" useBrowserLocale=\"true\" height=\"80vh\"></ngx-extended-pdf-viewer>\n            <img class='margin-vertical' *ngIf='isImage' src=\"{{previewlink}}\" alt='image here' width=\"100%\"/>\n          </div>\n         <div>\n         </div>\n        </div>\n        \n        <div>\n          <b> Date Uploaded </b>\n          <p>\n            {{ selectedDocument.date_uploaded }}\n          </p>\n        </div>\n        <div>\n          <b> Last Modified </b>\n          <p>\n            {{ selectedDocument.date_modified }}\n          </p>\n        </div>\n        <div>\n          <b> Comment </b>\n          <p>\n            {{ selectedDocument.comment }}\n          </p>\n        </div>\n        <mat-divider></mat-divider>\n        <br />\n        <div class=\"btn-group\">\n          <button mat-flat-button color=\"primary\" class=\"margin-horizontal\"> Edit </button>\n          <a mat-flat-button color=\"primary\" href=\"{{previewlink}}\" download class=\"margin-horizontal\"> Download </a>\n          <button mat-flat-button color=\"warn\" (click)='deleteDocument(selectedDocument)' class=\"margin-horizontal\"> Delete </button>\n        </div>\n      </div>\n    </div>\n\n  </div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/main/components/artifacts/artifacts.component.html":
  /*!**********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/main/components/artifacts/artifacts.component.html ***!
    \**********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppMainComponentsArtifactsArtifactsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"flex\">\n\n    <div mat-subheader style=\"display:flex;justify-content:space-between;padding: 16px;\">\n        <mat-form-field appearance=\"outline\" style=\"width: 300px;\">\n            <mat-label>Search Arifact</mat-label>\n            <input matInput placeholder=\"Enter Name of Version of Artifact\" (keyup)=\"nameSearch($event)\">\n            <mat-icon matSuffix>search</mat-icon>\n        </mat-form-field>\n        <div style=\"margin-bottom: 50px;\">\n            <button mat-raised-button color=\"primary\" (click)=\"openDialog()\"> Create New Artifact </button>\n            <button style=\"margin-left: 10px;\" mat-raised-button color=\"primary\"> Search Artifact </button>\n        </div>\n    </div>\n\n    <div class=\"grid\">\n\n        <mat-card class=\"example-card\" *ngFor=\"let artifact of artifacts\" style=\"width: 200px;margin:5px\">\n            <mat-card-content>\n                <div style=\"height: 70px; display: flex; justify-content: center; align-content: center;\">\n                    <h1 style=\"text-align: center;\"> {{ artifact.name }} </h1>\n                </div>\n            </mat-card-content>\n            <mat-card-actions>\n                <button mat-button (click)=\"viewDetails(artifact)\" color='primary'>Open</button>\n                <button mat-button>More Info</button>\n            </mat-card-actions>\n        </mat-card>\n\n    </div>\n\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/main/components/chat/chat-rooms/chat-rooms.component.html":
  /*!*****************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/main/components/chat/chat-rooms/chat-rooms.component.html ***!
    \*****************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppMainComponentsChatChatRoomsChatRoomsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<mat-card class=\"chat-room-container\">\n    <div>\n      <button mat-raised-button color=\"primary\"\n      (click)=\"openContactList()\"> Start New Chat <mat-icon> add </mat-icon> </button>\n    </div>\n    <mat-list>\n        <!--<div mat-subheader>Chats</div>-->\n        <mat-list-item *ngFor=\"let chat of activeChats\" (click)=\"loadMessages(chat)\">\n          <!--<mat-icon mat-list-icon>account_circle</mat-icon>-->\n          <img src=\"../../../../assets//profile-placeholder.png\" width=\"50px\" style=\"margin-right: 10px; border-radius: 50%;\"/>\n          <div>\n            <div mat-line> {{ user.user_id == chat.sender_id ? chat.reciever_name : chat.sender_name }} </div>\n            <div mat-line> {{ chat.chat_message_text }} </div>\n          </div>\n        </mat-list-item>\n      </mat-list>\n</mat-card>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/main/components/chat/chat.component.html":
  /*!************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/main/components/chat/chat.component.html ***!
    \************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppMainComponentsChatChatComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"hide-scroll-bar chat-component\">\n\n    <div class=\"chat-section hide-scroll-bar\">\n\n      <div class=\"messages hide-scroll-bar\" #scrollMep  *ngIf=\"isChatSelected\">\n        <div *ngFor=\"let chatMessage of chatMessages\" [ngStyle]=\"determineFloat(chatMessage)\">\n          <p id=\"chat-bubble\" > \n            <span> {{ chatMessage.chat_message_text }}  </span>\n            <br/>\n            <!-- <span style=\"color:white\"> {{chatMessage.timestamp}} </span> -->\n            <small style=\"font-size:xx-small\"> {{  getTimeDifference(chatMessage.timestamp) }} </small>\n          </p> \n         \n        </div>\n        \n      </div>\n      \n      <div class=\"text-input\" *ngIf=\"isChatSelected\">\n\n        <mat-form-field  appearance=\"outline\" style=\"width: 60%; margin-right: 10px;\" >\n          <mat-label>Enter Message</mat-label>\n          <input matInput placeholder=\"Enter Message\" #messageField>\n        </mat-form-field>\n\n        <button mat-raised-button [color]=\"'primary'\" style=\"height: 63px;\" (click)=\"sendMessage(messageField.value)\">\n           <mat-icon> send </mat-icon> \n        </button>\n\n      </div>\n    </div>\n\n    <div style=\"width: 35%;\n    display: flex;\n    padding: 10px;\n    justify-content: center;\" class=\"hide-scroll-bar\">\n        <app-chat-rooms [user]=\"user\" [activeChats]=\"activeChats\" (onActiveChat)=\"onAcitveChatSelected($event)\"></app-chat-rooms>\n    </div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/main/components/main-header/main-header.component.html":
  /*!**************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/main/components/main-header/main-header.component.html ***!
    \**************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppMainComponentsMainHeaderMainHeaderComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<mat-toolbar style=\"background-color: #3597fa; color: white;\">\n    <mat-toolbar-row>\n        <div style=\"display:flex; justify-content: space-around;align-items: center;\">\n            <span>\n                <img src=\"./../../../assets/logo.png\" width=\"90px\" style=\"margin-left: 40px;\" />\n            </span>\n            <span style=\"margin-left: 10px;\">\n                | {{ organization.getName() }}\n            </span>\n        </div>\n\n        <!--\n        <span style=\"float:right;\">\n            <button mat-button matTooltip=\"Hold on, we're not ready yet...\"> Dummy 1 </button>\n            <button mat-button matTooltip=\"Hold on, we're not ready yet...\"> Dummy 2</button>\n        </span>\n    -->\n\n        <span>\n            <button mat-button>\n                <mat-icon style=\"margin-right: 5px;\"> account_circle</mat-icon>\n                {{ fullName === ' ' ? 'My Account' : fullName}}\n            </button>\n            <button mat-icon-button [matMenuTriggerFor]=\"menu\" aria-label=\"Example icon-button with a menu\">\n                <mat-icon>more_vert</mat-icon>\n            </button>\n            <mat-menu #menu=\"matMenu\">\n                <button mat-menu-item>\n                    <mat-icon>settings</mat-icon>\n                    <span>Settings</span>\n                </button>\n                <button mat-menu-item (click)=\"logOut()\">\n                    <mat-icon>meeting_room</mat-icon>\n                    <span>Log Out</span>\n                </button>\n            </mat-menu>\n\n        </span>\n    </mat-toolbar-row>\n</mat-toolbar>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/main/components/team/team-invite/team-invite.component.html":
  /*!*******************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/main/components/team/team-invite/team-invite.component.html ***!
    \*******************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppMainComponentsTeamTeamInviteTeamInviteComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container\">\n    \n    <div style=\"width: 500px;\">\n        <div>\n            <h1 style=\"text-align: center;\"> Join Team {{  organizationName  }} </h1>\n        </div>\n        <div>\n            <h4 style=\"text-align: center;\"> Please enter your information. A verification mail will be sent to you. </h4>\n        </div>\n        <p>\n            <mat-form-field appearance=\"outline\" [style.width.px]=500>\n                <mat-label> Please enter your email </mat-label>\n                <input matInput placeholder=\"Enter your email address\" [type]=\"'email'\" #email>\n                <mat-icon matSuffix>email</mat-icon>\n                <mat-hint> Email </mat-hint>\n            </mat-form-field>\n        </p>\n        <p>\n            <mat-form-field appearance=\"outline\" [style.width.px]=500 >\n                <mat-label> Create a password</mat-label>\n                <input matInput placeholder=\"Create a password\" [type]=\"'password'\" #password>\n                <mat-icon matSuffix>lock</mat-icon>\n                <mat-hint> Password </mat-hint>\n            </mat-form-field>\n        </p>\n        <!--*ngIf='loginInProcess'-->\n        <mat-progress-bar mode=\"indeterminate\" ></mat-progress-bar>\n        <p style=\"text-align:center\">\n            <button mat-raised-button color=\"primary\" (click)=\"signUpUser(email.value,password.value)\"> Join </button>\n        </p>\n    </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/main/components/team/team.component.html":
  /*!************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/main/components/team/team.component.html ***!
    \************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppMainComponentsTeamTeamComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class='action-bar' style=\"display: flex;\">\n    <div class=\"filter-fields\">\n        <mat-form-field class=\"example-full-width\">\n            <mat-label>Search By Name</mat-label>\n            <input matInput placeholder=\"Eg. John Doe\">\n        </mat-form-field>\n    </div>\n\n    <div class=\"btn-group\">\n        <button mat-raised-button color='primary'> Search </button>\n        <button mat-raised-button color='primary' (click)='openInviteTeamDialog()'> Invite User </button>\n    </div>\n</div>\n<table mat-table [dataSource]=\"members\" class=\"mat-elevation-z8\">\n\n    <!--- Note that these columns can be defined in any order.\n          The actual rendered columns are set as a property on the row definition\" -->\n\n    <!-- Position Column -->\n    <ng-container matColumnDef=\"name\">\n        <th mat-header-cell *matHeaderCellDef> Name </th>\n        <td mat-cell *matCellDef=\"let member\"> {{member.first_name}} {{member.last_name}} </td>\n    </ng-container>\n\n\n    <!-- Weight Column -->\n    <ng-container matColumnDef=\"email\">\n        <th mat-header-cell *matHeaderCellDef> Email </th>\n        <td mat-cell *matCellDef=\"let member\"> {{member.email}} </td>\n    </ng-container>\n\n    <!-- Symbol Column -->\n    <ng-container matColumnDef=\"role\">\n        <th mat-header-cell *matHeaderCellDef> Role </th>\n        <td mat-cell *matCellDef=\"let member\"> {{member.role}} </td>\n    </ng-container>\n\n    <!-- Symbol Column -->\n    <ng-container matColumnDef=\"action\">\n        <th mat-header-cell *matHeaderCellDef> </th>\n        <td mat-cell *matCellDef=\"let member\"> \n            <div style=\"float: right;\">\n                <button mat-button color='primary'> Send Message </button> \n                <button mat-button color='primary'> Change Priveliges </button> \n            </div>\n        </td>\n    </ng-container>\n\n    <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n    <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n</table>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/main/components/verify-user/verify-user.component.html":
  /*!**************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/main/components/verify-user/verify-user.component.html ***!
    \**************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppMainComponentsVerifyUserVerifyUserComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container\">\n    \n    <div style=\"width: 500px;\">\n        <div>\n            <h1 style=\"text-align: center;\"> Verify My Account </h1>\n        </div>\n        <div>\n            <h4 style=\"text-align: center;\"> Please Enter The Information To Completed Set Up </h4>\n        </div>\n        <p>\n            <mat-form-field appearance=\"outline\" [style.width.px]=500>\n                <mat-label> Please Enter Your First Name</mat-label>\n                <input matInput placeholder=\"Please Your First Name\" [type]='text' #firstName>\n                <mat-icon matSuffix>contacts</mat-icon>\n                <mat-hint>First Name</mat-hint>\n            </mat-form-field>\n        </p>\n        <p>\n            <mat-form-field appearance=\"outline\" [style.width.px]=500 >\n                <mat-label>Please Enter Your Last Name</mat-label>\n                <input matInput placeholder=\"Please Enter Your Last Name\" [type]=\"text\" #lastName>\n                <mat-icon matSuffix>contacts</mat-icon>\n                <mat-hint>Last Name</mat-hint>\n            </mat-form-field>\n        </p>\n        <mat-progress-bar mode=\"indeterminate\" *ngIf='loginInProcess'></mat-progress-bar>\n        <p style=\"text-align:center\">\n            <button mat-raised-button color=\"primary\" (click)=\"verifyAccount(firstName.value,lastName.value)\"> Done </button>\n        </p>\n    </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/main/components/work-space-message-thread/work-space-message-thread-reply-card/work-space-message-thread-reply-card.component.html":
  /*!******************************************************************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/main/components/work-space-message-thread/work-space-message-thread-reply-card/work-space-message-thread-reply-card.component.html ***!
    \******************************************************************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppMainComponentsWorkSpaceMessageThreadWorkSpaceMessageThreadReplyCardWorkSpaceMessageThreadReplyCardComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"reply-card\">\n    <div style=\"width: 100%;\">\n        <div style=\"display: flex;\">\n            <div>\n                <img src=\"./../../../../assets/profile-placeholder.png\" width=\"50px\" style=\"border-radius: 50%; margin-left: 10px;\"/>\n            </div>\n            <div style=\"width: 100%;margin-left: 10px; margin-top:-5px;\">\n                <div style=\"display: flex;\">\n                    <p> {{ workspacePostReply.first_name + \" \" + workspacePostReply.last_name + \", \"}} </p> &nbsp;\n                    <p style=\"display: flex; align-items: center;\"> {{ timeLapse }}</p>\n                </div>\n            </div>\n        </div>\n        <div style=\"min-height: 50px; padding: 20px;\">\n            {{ workspacePostReply.content }}\n        </div>\n    </div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/main/components/work-space-message-thread/work-space-message-thread.component.html":
  /*!******************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/main/components/work-space-message-thread/work-space-message-thread.component.html ***!
    \******************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppMainComponentsWorkSpaceMessageThreadWorkSpaceMessageThreadComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-main-header></app-main-header>\n\n<mat-toolbar color='primary'>\n    <mat-toolbar-row class=\"tool-bar-row\" >\n        <span>\n            <button mat-button (click)='goBack()'>\n                <mat-icon>keyboard_arrow_left</mat-icon>\n            </button> \n            <span *ngIf='workspacePost'>{{ \"Thread > \" + workspacePost.message_title }}</span>\n        </span>\n        <div class=\"util-bar\">\n            <button matTooltip=\"Add Message\" mat-flat-button color='primary' (click)=\"openAddReplyToPostDialog()\">\n                <mat-icon> add_comment </mat-icon>\n            </button>\n        </div>\n    </mat-toolbar-row>\n</mat-toolbar>\n\n<div style=\"display: flex; justify-content: stretch;height: 100%;\" class=\"hide-scroll-bar\">\n    <div style=\"width: 25%;\">\n        <!-- Show artifact and members -->\n        <app-work-space-info-panel *ngIf='workspaceID' [workspaceID]='workspaceID' ></app-work-space-info-panel>\n    </div>\n    <div style=\"width: 75%;\" style=\"height: 400px; width: 100%;\" style=\"padding: 30px;overflow-x: scroll; height: calc(100vh - 190px); width: 100%;\">\n        <div>\n            <app-message-card *ngIf=\"workspacePost\" [workspacePost]=\"workspacePost\"></app-message-card>\n            <div style=\"display: flex; width: 100%; margin-top:50px; justify-content: center;\" *ngIf=\"!workspacePost\">\n                <mat-spinner [diameter]=\"50\"></mat-spinner>\n            </div>\n        </div>\n        <div>\n            <app-work-space-message-thread-reply-card style=\"width: 60%;\" *ngFor=\"let workspacePostReply of workspacePostReplies\" [workspacePostReply]=\"workspacePostReply\"> </app-work-space-message-thread-reply-card>\n        </div>\n    </div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/main/components/work-space/message-card/message-card.component.html":
  /*!***************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/main/components/work-space/message-card/message-card.component.html ***!
    \***************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppMainComponentsWorkSpaceMessageCardMessageCardComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<mat-card style=\"display:flex; justify-content:flex-start; margin:10px; flex-direction: column;\">\n    <div style=\"width: 100%;\">\n        <div style=\"display: flex;\">\n            <div>\n                <img src=\"./../../../../assets/profile-placeholder.png\" width=\"50px\" style=\"border-radius: 50%;\" />\n            </div>\n            <div style=\"width: 100%; padding: 9px;\">\n                <div>\n                    <h4 style=\"margin:0\"> {{ workspacePost.message_title }} </h4>\n                    <small> {{ workspacePost.first_name + \" \" + workspacePost.last_name }}, {{ timeLapse }} </small>\n                </div>\n            </div>\n        </div>\n        <div style=\"padding: 20px;\">\n            {{ workspacePost.message_content }}\n        </div>\n        <div>\n            <mat-chip-list class=\"mat-chip-list-stacked\" aria-label=\"Color selection\" *ngIf=\"workspacePost.artifact_id\" >\n                <mat-chip selected [color]=\"'primary'\" style=\"margin-bottom:20px\" matTooltip={{workspacePost.artifact_description}} (click)=\"viewDetails(workspacePost.artifact_id)\">\n                    {{workspacePost.artifact_name}}\n                </mat-chip>\n            </mat-chip-list>\n        </div>\n    </div>\n    <div style=\"width: 100%; display: flex; justify-content: space-around;\">\n        <button mat-button color=\"primary\">\n            <mat-icon> history_edu </mat-icon>\n        </button>\n        <button mat-button color=\"primary\">\n            <mat-icon> favorite_border </mat-icon>\n        </button>\n        <button mat-button color=\"primary\" (click)=\"goToMessageThread()\">\n            <mat-icon> preview </mat-icon>\n        </button>\n        <button mat-button color=\"primary\">\n            <mat-icon> note_add </mat-icon>\n        </button>\n    </div>\n</mat-card>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/main/components/work-space/view-work-space/view-work-space.component.html":
  /*!*********************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/main/components/work-space/view-work-space/view-work-space.component.html ***!
    \*********************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppMainComponentsWorkSpaceViewWorkSpaceViewWorkSpaceComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-main-header></app-main-header>\n\n<mat-toolbar color='primary'>\n    <mat-toolbar-row class=\"tool-bar-row\" >\n        <span>\n            <button mat-button (click)='goBack()'>\n                <mat-icon>keyboard_arrow_left</mat-icon>\n            </button> \n            <span *ngIf='workspace'>{{ workspace.work_space_name }}</span>\n        </span>\n        <div class=\"util-bar\">\n            <button matTooltip=\"Add Message\" mat-flat-button color='primary' (click)='openCreateMessageDialog()'>\n                <mat-icon> add_comment </mat-icon>\n            </button>\n        </div>\n    </mat-toolbar-row>\n</mat-toolbar>\n\n<div style=\"display: flex; justify-content: stretch;height: 100%;\">\n    <div style=\"width: 25%;\">\n        <!-- Show artifact and members -->\n        <app-work-space-info-panel *ngIf='workspace' [workspaceID]='workspace.work_space_id' ></app-work-space-info-panel>\n    </div>\n    <div style=\"width: 75%;\">\n        <div style=\"height: 400px; width: 100%;\" style=\"padding: 30px;overflow-x: scroll; height: calc(100vh - 190px);\">\n            <app-message-card *ngFor=\"let workspacePost of workspacePosts\" [workspacePost]=\"workspacePost\"></app-message-card>\n        </div>\n    </div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/main/components/work-space/work-space-info-panel/work-space-info-panel.component.html":
  /*!*********************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/main/components/work-space/work-space-info-panel/work-space-info-panel.component.html ***!
    \*********************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppMainComponentsWorkSpaceWorkSpaceInfoPanelWorkSpaceInfoPanelComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div style=\"height: 400px; width: 100%; border-right: 1px solid rgba(0, 0, 0, 0.12); height: calc(100vh - 130px);\">\n    <mat-list #items>\n        <div mat-subheader style=\"display: flex; justify-content: space-between;\"> \n            <span>Members</span> \n            <button mat-raised-button color=\"primary\" (click)='openAddMemberDialog()'> Add Member </button>\n        </div>\n        \n        <mat-list-item *ngFor=\"let workspaceMember of workspaceMembers\">\n          <mat-icon mat-list-icon>account_circle</mat-icon>\n          <div mat-line>{{ workspaceMember.first_name + ' ' + workspaceMember.last_name }}</div>\n          <div mat-line> {{workspaceMember.email}} </div>\n        </mat-list-item>\n\n        <mat-divider></mat-divider>\n        <div mat-subheader style=\"display: flex; justify-content: space-between;\"> \n            <span>Artifacts</span> \n            <button mat-raised-button color=\"primary\" (click)=\"openAddArtifactsDialog()\"> Add Artifact </button> \n        </div>\n        <mat-list-item *ngFor=\"let artifact of artifacts\">\n          <mat-icon mat-list-icon>note</mat-icon>\n          <div mat-line>{{ artifact.name }}</div>\n          <div mat-line>{{ artifact.date_created }} </div>\n        </mat-list-item>\n\n      </mat-list>              \n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/main/components/work-space/work-space.component.html":
  /*!************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/main/components/work-space/work-space.component.html ***!
    \************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppMainComponentsWorkSpaceWorkSpaceComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"flex\">\n\n    <div mat-subheader style=\"display:flex;justify-content:space-between;padding: 16px;\">\n        <mat-form-field appearance=\"outline\" style=\"width: 300px;\">\n            <mat-label>Search Work Space</mat-label>\n            <input matInput placeholder=\"Enter Name of Workspace\" (keyup)=\"nameSearch($event)\">\n            <mat-icon matSuffix>search</mat-icon>\n        </mat-form-field>\n        <div style=\"margin-bottom: 50px;\">\n            <button mat-raised-button color=\"primary\" (click)=\"openCreateWorkSpaceDialog()\"> Create Workspace </button>\n        </div>\n    </div>\n\n    <div class=\"grid\">\n\n        <mat-card class=\"example-card\" *ngFor=\"let workSpace of workSpaces\"style=\"width: 200px; margin:5px\">\n           \n            <img mat-card-image src=\"../../../assets/work-space.png\"\n                alt=\"Work Space Image\">\n            <mat-card-content>\n                <div style=\"height: 70px; display: flex; justify-content: center;align-content: center;\">\n                    <h1 style=\"text-align: center;\"> {{workSpace.work_space_name}} </h1>\n                </div>\n            </mat-card-content>\n            <mat-card-actions>\n                <button mat-button color='primary' (click)='openWorkSpace(workSpace)'>Open</button>\n                <button mat-button>More Info</button>\n            </mat-card-actions>\n\n        </mat-card>\n\n    </div>\n\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/main/dialogs/add-artifact-dialog/add-artifact-dialog.component.html":
  /*!***************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/main/dialogs/add-artifact-dialog/add-artifact-dialog.component.html ***!
    \***************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppMainDialogsAddArtifactDialogAddArtifactDialogComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"form\">\n    <mat-form-field class=\"fields\">\n        <mat-label> Search Artifact By Name </mat-label>\n        <input matInput placeholder=\"Enter Name of The Artifact\" value=\"\" #artifactName maxlength=\"50\"\n            (keyup)=\"search($event)\" \n            [matAutocomplete]=\"auto\"\n            >\n        <mat-autocomplete autoActiveFirstOption #auto=\"matAutocomplete\">\n            <mat-option *ngFor=\"let option of artifacts\" [value]=\"option.name\">\n                {{option.name}}\n            </mat-option>\n        </mat-autocomplete>\n    </mat-form-field>\n\n    <div>\n        <div mat-dialog-actions>\n            <button mat-button cdkFocusInitial (click)=\"addArtifactToWorkSpace(artifactName.value)\"> Add Artifact </button>\n            <button mat-button (click)=\"closeDialog()\">Close</button>\n        </div>\n    </div>\n\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/main/dialogs/chat-contacts-dialog/chat-contacts-dialog.component.html":
  /*!*****************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/main/dialogs/chat-contacts-dialog/chat-contacts-dialog.component.html ***!
    \*****************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppMainDialogsChatContactsDialogChatContactsDialogComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"chat-dialog\">\n    <div>\n        <table mat-table [dataSource]=\"dataSource\" class=\"mat-elevation-z8\">\n    \n            <!--- Note that these columns can be defined in any order.\n                  The actual rendered columns are set as a property on the row definition\" -->\n        \n            <!-- Position Column -->\n            <ng-container matColumnDef=\"name\">\n                <th mat-header-cell *matHeaderCellDef> Name </th>\n                <td mat-cell *matCellDef=\"let member\"> {{member.first_name}} {{member.last_name}} </td>\n            </ng-container>\n        \n        \n            <!-- Weight Column -->\n            <ng-container matColumnDef=\"email\">\n                <th mat-header-cell *matHeaderCellDef> Email </th>\n                <td mat-cell *matCellDef=\"let member\"> {{member.email}} </td>\n            </ng-container>\n        \n        \n            <!-- Symbol Column -->\n            <ng-container matColumnDef=\"action\">\n                <th mat-header-cell *matHeaderCellDef> </th>\n                <td mat-cell *matCellDef=\"let member\"> \n                    <div style=\"float: right;\">\n                        <button mat-button color='primary' (click)=\"selectContact(member)\"> Send Message </button> \n                    </div>\n                </td>\n            </ng-container>\n        \n            <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n            <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n        </table>\n        <mat-paginator [pageSizeOptions]=\"[5]\" showFirstLastButtons></mat-paginator>\n    </div>\n    \n    <div class=\"text-input\" *ngIf=\"isContactSelected\">\n    \n        <mat-form-field  appearance=\"outline\" style=\"width: 60%; margin-right: 10px;\" >\n          <mat-label>Enter Message</mat-label>\n          <input matInput placeholder=\"Enter Message\" #messageField>\n        </mat-form-field>\n    \n        <button mat-raised-button [color]=\"'primary'\" style=\"height: 63px;\" (click)=\"sendMessage(messageField.value)\">\n           <mat-icon> send </mat-icon> \n        </button>\n    </div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/main/dialogs/create-artifact-dialog/create-dialog.component.html":
  /*!************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/main/dialogs/create-artifact-dialog/create-dialog.component.html ***!
    \************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppMainDialogsCreateArtifactDialogCreateDialogComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"form\">\n\n    <div style=\"display: flex; justify-content: center;\">\n        <h2> Create Artifact</h2>\n    </div>\n\n    <mat-form-field class=\"fields\">\n        <mat-label>Enter Name Of Artifact ({{ 50 - name.value.length }})</mat-label>\n        <input matInput placeholder=\"Eg. Report 2020, Revision etc\" value=\"\" #name maxlength=\"50\">\n    </mat-form-field>\n\n    <mat-form-field class=\"fields\">\n        <mat-label>Enter the description of this artifact ({{ 500 - description.value.length }})</mat-label>\n        <textarea matInput placeholder=\"Eg. What this artifact mainly entails and its purpose\" #description maxlength=\"200\"></textarea>\n    </mat-form-field>\n\n    <div>\n        <div mat-dialog-actions>\n            <button mat-button cdkFocusInitial (click)=\"createArtifact(name.value,description.value)\">Save & Upload Document</button>\n            <button mat-button (click)=\"closeDialog()\">Close</button>\n        </div>\n    </div>\n\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/main/dialogs/create-message-dialog/create-message-dialog.component.html":
  /*!*******************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/main/dialogs/create-message-dialog/create-message-dialog.component.html ***!
    \*******************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppMainDialogsCreateMessageDialogCreateMessageDialogComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"form\">\n\n    <div style=\"display: flex; justify-content: center;\">\n        <h2> Start A Discussion </h2>\n    </div>\n\n    <mat-form-field class=\"fields\">\n        <mat-label> Enter Title </mat-label>\n        <input matInput placeholder=\"What is this about ?\" value=\"\" #title maxlength=\"50\">\n    </mat-form-field>\n\n    <mat-form-field class=\"fields\">\n        <mat-label> Enter Message </mat-label>\n        <textarea matInput placeholder=\"What do you want to say ?\" value=\"\" #content maxlength=\"200\"> </textarea>\n    </mat-form-field>\n\n    <mat-form-field appearance=\"fill\">\n        <mat-label>Select Artifact</mat-label>\n        <mat-select (selectionChange)=\"onArtifactSelected($event)\">\n            <mat-option *ngFor=\"let artifact of artifacts\" [value]=\"artifact.art_id\">\n                {{artifact.name}}\n            </mat-option>\n        </mat-select>\n    </mat-form-field>\n\n    <div>\n        <div mat-dialog-actions>\n            <button mat-raised-button color=\"primary\" cdkFocusInitial (click)=\"postMessage(title.value,content.value)\">\n                Post </button>\n            <button mat-button (click)=\"closeDialog()\">Close</button>\n            <button> Run Test </button>\n\n        </div>\n    </div>\n\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/main/dialogs/create-work-space-dialog/create-work-space-dialog.component.html":
  /*!*************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/main/dialogs/create-work-space-dialog/create-work-space-dialog.component.html ***!
    \*************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppMainDialogsCreateWorkSpaceDialogCreateWorkSpaceDialogComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"form\">\n    <div style=\"display: flex; justify-content: center;\">\n        <h2> Create Work Space </h2>\n    </div>\n\n    <mat-form-field class=\"fields\">\n        <mat-label>Enter Name Of The Workspace ({{ 50 - name.value.length }})</mat-label>\n        <input matInput placeholder=\"Enter Name of Your Work Space\" value=\"\" #name maxlength=\"50\">\n    </mat-form-field>\n\n    <div>\n        <div mat-dialog-actions>\n            <button mat-button cdkFocusInitial (click)=\"createWorkSpace(name.value)\"> Create Work Space</button>\n            <button mat-button (click)=\"closeDialog()\">Close</button>\n        </div>\n    </div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/main/dialogs/create-workspace-thread-dialog/create-workspace-thread-dialog.component.html":
  /*!*************************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/main/dialogs/create-workspace-thread-dialog/create-workspace-thread-dialog.component.html ***!
    \*************************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppMainDialogsCreateWorkspaceThreadDialogCreateWorkspaceThreadDialogComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"form\">\n\n    <div style=\"display: flex; justify-content: center;\">\n        <h2> Add Thread </h2>\n    </div>\n\n    <mat-form-field class=\"fields\">\n        <mat-label> Enter Message </mat-label>\n        <textarea matInput placeholder=\"What do you want to say ?\" value=\"\" #content maxlength=\"150\"> </textarea>\n    </mat-form-field>\n\n    <div>\n        <div mat-dialog-actions>\n            <button mat-raised-button color=\"primary\" cdkFocusInitial (click)=\"postMessageThread(content.value)\"> Post </button>\n            <button mat-button (click)=\"closeDialog()\">Close</button>\n        </div>\n    </div>\n\n</div> ";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/main/dialogs/delete-artifact-dialog/delete-artifact-dialog.component.html":
  /*!*********************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/main/dialogs/delete-artifact-dialog/delete-artifact-dialog.component.html ***!
    \*********************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppMainDialogsDeleteArtifactDialogDeleteArtifactDialogComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"form\">\n    <div style=\"display: flex; justify-content: center;\">\n        <h2> Delete Artifact </h2>\n    </div>\n    <mat-form-field class=\"fields\">\n        <mat-label> Please Enter The Name of The Artifact </mat-label>\n        <input matTooltip='This action cannot be undone' matInput placeholder=\"Verify The Process\" value=\"\" #artifactName maxlength=\"50\" (keyup)='onType(artifactName.value)'>\n    </mat-form-field>\n   \n    <div>\n        <small style=\"color:red\"> Note : This action cannot be undone </small>\n    </div>\n\n    <div>\n        <div mat-dialog-actions>\n            <button mat-raised-button cdkFocusInitial (click)=\"deleteArtifact()\" [disabled]=\"!isNameCorrect\" color='warn'> Delete Artifact </button>\n            <button mat-button (click)=\"closeDialog()\">Close</button>\n        </div>\n    </div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/main/dialogs/team-invite-dialog/invite-dialog.component.html":
  /*!********************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/main/dialogs/team-invite-dialog/invite-dialog.component.html ***!
    \********************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppMainDialogsTeamInviteDialogInviteDialogComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container\">\n    \n    <div style=\"width: 500px;\">\n        \n        <p>\n            <mat-form-field appearance=\"outline\" [style.width.px]=500>\n                <mat-label> Invite Link </mat-label>\n                <input matInput placeholder=\"Please Your First Name\" [type]='text'  #inputElement value=\"{{inviteUrl}}\">\n            </mat-form-field>\n        </p>\n        <p style=\"display: flex; justify-content: end;\">\n            <button mat-raised-button color='primary' (click)='copyLinkToClipBoard(inputElement)'> Copy </button>\n            <button mat-button (click)='closeDialog()'> Close </button>\n        </p>\n        \n    </div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/main/dialogs/upload-artifact-dialog/upload-dialog.component.html":
  /*!************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/main/dialogs/upload-artifact-dialog/upload-dialog.component.html ***!
    \************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppMainDialogsUploadArtifactDialogUploadDialogComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"form\">\n    <div style=\"display: flex; justify-content: center;\">\n        <h2> Upload Document </h2>\n    </div>\n\n    <mat-form-field class=\"fields\">\n        <mat-label> Name the version of the document ({{ 50 - versionName.value.length }}) </mat-label>\n        <input matTooltip='The version name will be relfected to represent this file name' matInput placeholder=\"Be sure to use a version naming standard.\" value=\"\" #versionName maxlength=\"50\">\n    </mat-form-field>\n\n    <mat-form-field class=\"fields\">\n        <mat-label>Comment on the document ({{ 500 - comment.value.length }})</mat-label>\n        <textarea matInput placeholder=\"Eg. Changes made to the document, minor details etc\" #comment maxlength=\"500\"></textarea>\n    </mat-form-field>\n\n    <mat-progress-bar *ngIf='selectedFile' mode=\"determinate\" value=\"{{ uploadProgress }}\"></mat-progress-bar>\n\n    <div *ngIf='selectedFile' class=\"fields\" style=\"margin-top: 10px; margin-bottom: 10px;\">\n        <mat-card style=\"display: flex; justify-content: space-between; align-items: center;\">  \n            <div> \n                <span>{{ selectedFile.name }}</span> \n            </div>\n            <button mat-button (click)='removeFile()' [disabled]='hasUploaded'> <mat-icon>delete</mat-icon> </button>\n        </mat-card>\n    </div>\n\n    <div class=\"fields\">\n        <input #fileInput hidden=\"true\" type=\"file\" onclick=\"this.value=null\" (change)=\"fileInputChange($event)\" accept=\"image/*,.pdf,.csv,.doc,.docx,.ppt,.xlsx,.xls\"/>\n        <button mat-raised-button color=\"primary\" (click)=\"fileInput.click()\" [disabled]=\"selectedFile || hasUploaded\">Choose Document</button>\n    </div>\n   \n    <div>\n        <div mat-dialog-actions>\n            <button mat-button cdkFocusInitial (click)=\"uploadFile(versionName.value,comment.value)\" [disabled]=\"!selectedFile || hasUploaded\"> Upload Document</button>\n            <button mat-button (click)=\"closeDialog()\" [disabled]='hasUploaded'>Close</button>\n        </div>\n    </div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/main/dialogs/work-space-add-member-dialog/work-space-add-member.component.html":
  /*!**************************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/main/dialogs/work-space-add-member-dialog/work-space-add-member.component.html ***!
    \**************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppMainDialogsWorkSpaceAddMemberDialogWorkSpaceAddMemberComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"form\">\n\n    <div style=\"display: flex; justify-content: center;\">\n        <h2> Add Member </h2>\n    </div>\n\n    <mat-form-field class=\"fields\">\n        <mat-label> Enter Email </mat-label>\n        <input matInput placeholder=\"Enter Email of Member\" value=\"\" #memberEmail maxlength=\"50\"\n            (keyup)=\"search($event)\" [formControl]=\"myControl\"\n            [matAutocomplete]=\"auto\">\n        <mat-autocomplete autoActiveFirstOption #auto=\"matAutocomplete\">\n            <mat-option *ngFor=\"let option of emailOptions\" [value]=\"option.email\">\n                {{option.email}}\n            </mat-option>\n        </mat-autocomplete>\n    </mat-form-field>\n\n    <div>\n        <div mat-dialog-actions>\n            <button mat-button cdkFocusInitial (click)=\"addToWorkspace(memberEmail.value)\"> Add To Workspace </button>\n            <button mat-button (click)=\"closeDialog()\">Close</button>\n        </div>\n    </div>\n\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/main/main/main.component.html":
  /*!*************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/main/main/main.component.html ***!
    \*************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppMainMainMainComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<app-main-header></app-main-header>\n<mat-tab-group mat-align-tabs=\"left\" [selectedIndex]='selectedTab.value'\n(selectedIndexChange)=\"setTabValue($event)\">\n    <mat-tab label=\"Artifacts\">\n        <app-artifacts></app-artifacts>\n    </mat-tab>\n    <mat-tab label=\"Work Spaces\">\n        <app-work-space></app-work-space>\n    </mat-tab>\n    <mat-tab label=\"My Team\">\n        <app-team></app-team>\n    </mat-tab>\n    <mat-tab label=\"Chat\">\n        <app-chat></app-chat>\n    </mat-tab>\n</mat-tab-group>";
    /***/
  },

  /***/
  "./node_modules/tslib/tslib.es6.js":
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */

  /***/
  function node_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function () {
      return __classPrivateFieldGet;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function () {
      return __classPrivateFieldSet;
    });
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0
    
    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.
    
    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */

    /* global Reflect, Promise */


    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
      };

      return _extendStatics(d, b);
    };

    function __extends(d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }

        return t;
      };

      return _assign.apply(this, arguments);
    };

    function __rest(s, e) {
      var t = {};

      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }

    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }

    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function (resolve) {
          resolve(value);
        });
      }

      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }

    function __generator(thisArg, body) {
      var _ = {
        label: 0,
        sent: function sent() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
          f,
          y,
          t,
          g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;

      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }

      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");

        while (_) try {
          if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
          if (y = 0, t) op = [op[0] & 2, t.value];

          switch (op[0]) {
            case 0:
            case 1:
              t = op;
              break;

            case 4:
              _.label++;
              return {
                value: op[1],
                done: false
              };

            case 5:
              _.label++;
              y = op[1];
              op = [0];
              continue;

            case 7:
              op = _.ops.pop();

              _.trys.pop();

              continue;

            default:
              if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                _ = 0;
                continue;
              }

              if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                _.label = op[1];
                break;
              }

              if (op[0] === 6 && _.label < t[1]) {
                _.label = t[1];
                t = op;
                break;
              }

              if (t && _.label < t[2]) {
                _.label = t[2];

                _.ops.push(op);

                break;
              }

              if (t[2]) _.ops.pop();

              _.trys.pop();

              continue;
          }

          op = body.call(thisArg, _);
        } catch (e) {
          op = [6, e];
          y = 0;
        } finally {
          f = t = 0;
        }

        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }

    function __exportStar(m, exports) {
      for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
    }

    function __values(o) {
      var s = typeof Symbol === "function" && Symbol.iterator,
          m = s && o[s],
          i = 0;
      if (m) return m.call(o);
      if (o && typeof o.length === "number") return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
      throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }

    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
          r,
          ar = [],
          e;

      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }

      return ar;
    }

    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));

      return ar;
    }

    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;

      for (var r = Array(s), k = 0, i = 0; i < il; i++) for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) r[k] = a[j];

      return r;
    }

    ;

    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
          i,
          q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;

      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }

      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }

      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }

      function fulfill(value) {
        resume("next", value);
      }

      function reject(value) {
        resume("throw", value);
      }

      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }

    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;

      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }

    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
          i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);

      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }

      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }

    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }

      return cooked;
    }

    ;

    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      result.default = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        default: mod
      };
    }

    function __classPrivateFieldGet(receiver, privateMap) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
      }

      return privateMap.get(receiver);
    }

    function __classPrivateFieldSet(receiver, privateMap, value) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
      }

      privateMap.set(receiver, value);
      return value;
    }
    /***/

  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _home_landing_page_landing_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./home/landing-page/landing-page.component */
    "./src/app/home/landing-page/landing-page.component.ts");
    /* harmony import */


    var _home_signup_signup_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./home/signup/signup.component */
    "./src/app/home/signup/signup.component.ts");
    /* harmony import */


    var _home_login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./home/login/login.component */
    "./src/app/home/login/login.component.ts");
    /* harmony import */


    var _home_signup_signup_action_signup_action_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./home/signup/signup-action/signup-action.component */
    "./src/app/home/signup/signup-action/signup-action.component.ts");
    /* harmony import */


    var _main_main_main_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./main/main/main.component */
    "./src/app/main/main/main.component.ts");
    /* harmony import */


    var _main_components_artifact_artifact_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./main/components/artifact/artifact.component */
    "./src/app/main/components/artifact/artifact.component.ts");
    /* harmony import */


    var _home_noaccess_noaccess_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./home/noaccess/noaccess.component */
    "./src/app/home/noaccess/noaccess.component.ts");
    /* harmony import */


    var _main_components_verify_user_verify_user_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./main/components/verify-user/verify-user.component */
    "./src/app/main/components/verify-user/verify-user.component.ts");
    /* harmony import */


    var _main_components_team_team_invite_team_invite_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./main/components/team/team-invite/team-invite.component */
    "./src/app/main/components/team/team-invite/team-invite.component.ts");
    /* harmony import */


    var _main_components_work_space_view_work_space_view_work_space_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./main/components/work-space/view-work-space/view-work-space.component */
    "./src/app/main/components/work-space/view-work-space/view-work-space.component.ts");
    /* harmony import */


    var _main_components_work_space_message_thread_work_space_message_thread_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./main/components/work-space-message-thread/work-space-message-thread.component */
    "./src/app/main/components/work-space-message-thread/work-space-message-thread.component.ts");

    const routes = [{
      path: "",
      component: _home_landing_page_landing_page_component__WEBPACK_IMPORTED_MODULE_3__["LandingPageComponent"]
    }, {
      path: "signup",
      component: _home_signup_signup_component__WEBPACK_IMPORTED_MODULE_4__["SignupComponent"]
    }, {
      path: 'login',
      component: _home_login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"]
    }, {
      path: 'signup/action',
      component: _home_signup_signup_action_signup_action_component__WEBPACK_IMPORTED_MODULE_6__["SignupActionComponent"]
    }, {
      path: 'error',
      component: _home_noaccess_noaccess_component__WEBPACK_IMPORTED_MODULE_9__["NoaccessComponent"]
    }, {
      path: 'account/verify/:id',
      component: _main_components_verify_user_verify_user_component__WEBPACK_IMPORTED_MODULE_10__["VerifyUserComponent"]
    }, {
      path: 'team/invite/:id',
      component: _main_components_team_team_invite_team_invite_component__WEBPACK_IMPORTED_MODULE_11__["TeamInviteComponent"]
    }, {
      path: 'app/workspace/:id',
      component: _main_components_work_space_view_work_space_view_work_space_component__WEBPACK_IMPORTED_MODULE_12__["ViewWorkSpaceComponent"]
    }, {
      path: 'app',
      component: _main_main_main_component__WEBPACK_IMPORTED_MODULE_7__["MainComponent"]
    }, {
      path: 'app/artifact/:id',
      component: _main_components_artifact_artifact_component__WEBPACK_IMPORTED_MODULE_8__["ArtifactComponent"]
    }, {
      path: 'app/workspace/:workspaceID/message/:messageID',
      component: _main_components_work_space_message_thread_work_space_message_thread_component__WEBPACK_IMPORTED_MODULE_13__["WorkSpaceMessageThreadComponent"]
    }];
    let AppRoutingModule = class AppRoutingModule {};
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AppRoutingModule);
    /***/
  },

  /***/
  "./src/app/app.component.css":
  /*!***********************************!*\
    !*** ./src/app/app.component.css ***!
    \***********************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".text-center\n{\n    text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0lBRUksa0JBQWtCO0FBQ3RCIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGV4dC1jZW50ZXJcbntcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./services/user.service */
    "./src/app/services/user.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    let AppComponent = class AppComponent {
      constructor(userServ, router) {
        this.userServ = userServ;
        this.router = router;
        this.title = 'artifactpro';
      }

      ngOnInit() {
        this.userServ.authUser();
      }

    };

    AppComponent.ctorParameters = () => [{
      type: _services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]
    }, {
      type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
    }];

    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./app.component.css */
      "./src/app/app.component.css")).default]
    })], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var ngx_extended_pdf_viewer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ngx-extended-pdf-viewer */
    "./node_modules/ngx-extended-pdf-viewer/fesm2015/ngx-extended-pdf-viewer.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/fesm2015/animations.js");
    /* harmony import */


    var _angular_material_menu__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/menu */
    "./node_modules/@angular/material/esm2015/menu.js");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");
    /* harmony import */


    var _angular_material_chips__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material/chips */
    "./node_modules/@angular/material/esm2015/chips.js");
    /* harmony import */


    var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/material/expansion */
    "./node_modules/@angular/material/esm2015/expansion.js");
    /* harmony import */


    var _home_landing_page_landing_page_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./home/landing-page/landing-page.component */
    "./src/app/home/landing-page/landing-page.component.ts");
    /* harmony import */


    var _home_login_login_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./home/login/login.component */
    "./src/app/home/login/login.component.ts");
    /* harmony import */


    var _home_signup_signup_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./home/signup/signup.component */
    "./src/app/home/signup/signup.component.ts");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/esm2015/icon.js");
    /* harmony import */


    var _home_header_header_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./home/header/header.component */
    "./src/app/home/header/header.component.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _services_user_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./services/user.service */
    "./src/app/services/user.service.ts");
    /* harmony import */


    var _home_signup_signup_action_signup_action_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ./home/signup/signup-action/signup-action.component */
    "./src/app/home/signup/signup-action/signup-action.component.ts");
    /* harmony import */


    var _main_main_main_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ./main/main/main.component */
    "./src/app/main/main/main.component.ts");
    /* harmony import */


    var _main_components_main_header_main_header_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! ./main/components/main-header/main-header.component */
    "./src/app/main/components/main-header/main-header.component.ts");
    /* harmony import */


    var _services_organization_service__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! ./services/organization.service */
    "./src/app/services/organization.service.ts");
    /* harmony import */


    var _main_components_artifacts_artifacts_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! ./main/components/artifacts/artifacts.component */
    "./src/app/main/components/artifacts/artifacts.component.ts");
    /* harmony import */


    var _services_artifacts_service__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! ./services/artifacts.service */
    "./src/app/services/artifacts.service.ts");
    /* harmony import */


    var _main_dialogs_create_artifact_dialog_create_dialog_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! ./main/dialogs/create-artifact-dialog/create-dialog.component */
    "./src/app/main/dialogs/create-artifact-dialog/create-dialog.component.ts");
    /* harmony import */


    var _main_components_artifact_artifact_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
    /*! ./main/components/artifact/artifact.component */
    "./src/app/main/components/artifact/artifact.component.ts");
    /* harmony import */


    var _services_document_service__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
    /*! ./services/document.service */
    "./src/app/services/document.service.ts");
    /* harmony import */


    var _main_dialogs_upload_artifact_dialog_upload_dialog_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
    /*! ./main/dialogs/upload-artifact-dialog/upload-dialog.component */
    "./src/app/main/dialogs/upload-artifact-dialog/upload-dialog.component.ts");
    /* harmony import */


    var _models_environment__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
    /*! ./models/environment */
    "./src/app/models/environment.ts");
    /* harmony import */


    var _home_noaccess_noaccess_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
    /*! ./home/noaccess/noaccess.component */
    "./src/app/home/noaccess/noaccess.component.ts");
    /* harmony import */


    var _main_components_team_team_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
    /*! ./main/components/team/team.component */
    "./src/app/main/components/team/team.component.ts");
    /* harmony import */


    var ngx_doc_viewer__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(
    /*! ngx-doc-viewer */
    "./node_modules/ngx-doc-viewer/fesm2015/ngx-doc-viewer.js");
    /* harmony import */


    var _services_member_service__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(
    /*! ./services/member.service */
    "./src/app/services/member.service.ts");
    /* harmony import */


    var _main_components_verify_user_verify_user_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(
    /*! ./main/components/verify-user/verify-user.component */
    "./src/app/main/components/verify-user/verify-user.component.ts");
    /* harmony import */


    var _main_dialogs_delete_artifact_dialog_delete_artifact_dialog_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(
    /*! ./main/dialogs/delete-artifact-dialog/delete-artifact-dialog.component */
    "./src/app/main/dialogs/delete-artifact-dialog/delete-artifact-dialog.component.ts");
    /* harmony import */


    var _main_dialogs_team_invite_dialog_invite_dialog_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(
    /*! ./main/dialogs/team-invite-dialog/invite-dialog.component */
    "./src/app/main/dialogs/team-invite-dialog/invite-dialog.component.ts");
    /* harmony import */


    var _main_components_team_team_invite_team_invite_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(
    /*! ./main/components/team/team-invite/team-invite.component */
    "./src/app/main/components/team/team-invite/team-invite.component.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _main_components_work_space_work_space_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(
    /*! ./main/components/work-space/work-space.component */
    "./src/app/main/components/work-space/work-space.component.ts");
    /* harmony import */


    var _services_work_space_service__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(
    /*! ./services/work-space.service */
    "./src/app/services/work-space.service.ts");
    /* harmony import */


    var _main_dialogs_create_work_space_dialog_create_work_space_dialog_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(
    /*! ./main/dialogs/create-work-space-dialog/create-work-space-dialog.component */
    "./src/app/main/dialogs/create-work-space-dialog/create-work-space-dialog.component.ts");
    /* harmony import */


    var _main_components_work_space_view_work_space_view_work_space_component__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(
    /*! ./main/components/work-space/view-work-space/view-work-space.component */
    "./src/app/main/components/work-space/view-work-space/view-work-space.component.ts");
    /* harmony import */


    var _services_util_service__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(
    /*! ./services/util.service */
    "./src/app/services/util.service.ts");
    /* harmony import */


    var _main_components_work_space_work_space_info_panel_work_space_info_panel_component__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(
    /*! ./main/components/work-space/work-space-info-panel/work-space-info-panel.component */
    "./src/app/main/components/work-space/work-space-info-panel/work-space-info-panel.component.ts");
    /* harmony import */


    var _main_dialogs_work_space_add_member_dialog_work_space_add_member_component__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(
    /*! ./main/dialogs/work-space-add-member-dialog/work-space-add-member.component */
    "./src/app/main/dialogs/work-space-add-member-dialog/work-space-add-member.component.ts");
    /* harmony import */


    var _main_components_work_space_message_card_message_card_component__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(
    /*! ./main/components/work-space/message-card/message-card.component */
    "./src/app/main/components/work-space/message-card/message-card.component.ts");
    /* harmony import */


    var _main_dialogs_create_message_dialog_create_message_dialog_component__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(
    /*! ./main/dialogs/create-message-dialog/create-message-dialog.component */
    "./src/app/main/dialogs/create-message-dialog/create-message-dialog.component.ts");
    /* harmony import */


    var _main_dialogs_add_artifact_dialog_add_artifact_dialog_component__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(
    /*! ./main/dialogs/add-artifact-dialog/add-artifact-dialog.component */
    "./src/app/main/dialogs/add-artifact-dialog/add-artifact-dialog.component.ts");
    /* harmony import */


    var _main_components_work_space_message_thread_work_space_message_thread_component__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(
    /*! ./main/components/work-space-message-thread/work-space-message-thread.component */
    "./src/app/main/components/work-space-message-thread/work-space-message-thread.component.ts");
    /* harmony import */


    var _main_components_work_space_message_thread_work_space_message_thread_reply_card_work_space_message_thread_reply_card_component__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(
    /*! ./main/components/work-space-message-thread/work-space-message-thread-reply-card/work-space-message-thread-reply-card.component */
    "./src/app/main/components/work-space-message-thread/work-space-message-thread-reply-card/work-space-message-thread-reply-card.component.ts");
    /* harmony import */


    var _main_dialogs_create_workspace_thread_dialog_create_workspace_thread_dialog_component__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(
    /*! ./main/dialogs/create-workspace-thread-dialog/create-workspace-thread-dialog.component */
    "./src/app/main/dialogs/create-workspace-thread-dialog/create-workspace-thread-dialog.component.ts");
    /* harmony import */


    var _main_components_chat_chat_component__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(
    /*! ./main/components/chat/chat.component */
    "./src/app/main/components/chat/chat.component.ts");
    /* harmony import */


    var _services_chat_service__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(
    /*! ./services/chat.service */
    "./src/app/services/chat.service.ts");
    /* harmony import */


    var _main_components_chat_chat_rooms_chat_rooms_component__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(
    /*! ./main/components/chat/chat-rooms/chat-rooms.component */
    "./src/app/main/components/chat/chat-rooms/chat-rooms.component.ts");
    /* harmony import */


    var _main_dialogs_chat_contacts_dialog_chat_contacts_dialog_component__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(
    /*! ./main/dialogs/chat-contacts-dialog/chat-contacts-dialog.component */
    "./src/app/main/dialogs/chat-contacts-dialog/chat-contacts-dialog.component.ts");

    let AppModule = class AppModule {};
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"], _home_landing_page_landing_page_component__WEBPACK_IMPORTED_MODULE_11__["LandingPageComponent"], _home_login_login_component__WEBPACK_IMPORTED_MODULE_12__["LoginComponent"], _home_signup_signup_component__WEBPACK_IMPORTED_MODULE_13__["SignupComponent"], _home_header_header_component__WEBPACK_IMPORTED_MODULE_15__["HeaderComponent"], _home_signup_signup_action_signup_action_component__WEBPACK_IMPORTED_MODULE_18__["SignupActionComponent"], _main_main_main_component__WEBPACK_IMPORTED_MODULE_19__["MainComponent"], _main_components_main_header_main_header_component__WEBPACK_IMPORTED_MODULE_20__["MainHeaderComponent"], _main_components_artifacts_artifacts_component__WEBPACK_IMPORTED_MODULE_22__["ArtifactsComponent"], _main_dialogs_create_artifact_dialog_create_dialog_component__WEBPACK_IMPORTED_MODULE_24__["CreateDialogComponent"], _main_components_artifact_artifact_component__WEBPACK_IMPORTED_MODULE_25__["ArtifactComponent"], _main_dialogs_upload_artifact_dialog_upload_dialog_component__WEBPACK_IMPORTED_MODULE_27__["UploadDialogComponent"], _home_noaccess_noaccess_component__WEBPACK_IMPORTED_MODULE_29__["NoaccessComponent"], _main_components_team_team_component__WEBPACK_IMPORTED_MODULE_30__["TeamComponent"], _main_components_verify_user_verify_user_component__WEBPACK_IMPORTED_MODULE_33__["VerifyUserComponent"], _main_dialogs_delete_artifact_dialog_delete_artifact_dialog_component__WEBPACK_IMPORTED_MODULE_34__["DeleteArtifactDialogComponent"], _main_dialogs_team_invite_dialog_invite_dialog_component__WEBPACK_IMPORTED_MODULE_35__["InviteDialogComponent"], _main_components_team_team_invite_team_invite_component__WEBPACK_IMPORTED_MODULE_36__["TeamInviteComponent"], _main_components_work_space_work_space_component__WEBPACK_IMPORTED_MODULE_38__["WorkSpaceComponent"], _main_dialogs_create_work_space_dialog_create_work_space_dialog_component__WEBPACK_IMPORTED_MODULE_40__["CreateWorkSpaceDialogComponent"], _main_components_work_space_view_work_space_view_work_space_component__WEBPACK_IMPORTED_MODULE_41__["ViewWorkSpaceComponent"], _main_components_work_space_work_space_info_panel_work_space_info_panel_component__WEBPACK_IMPORTED_MODULE_43__["WorkSpaceInfoPanelComponent"], _main_dialogs_work_space_add_member_dialog_work_space_add_member_component__WEBPACK_IMPORTED_MODULE_44__["WorkSpaceAddMemberComponent"], _main_components_work_space_message_card_message_card_component__WEBPACK_IMPORTED_MODULE_45__["MessageCardComponent"], _main_dialogs_create_message_dialog_create_message_dialog_component__WEBPACK_IMPORTED_MODULE_46__["CreateMessageDialogComponent"], _main_dialogs_add_artifact_dialog_add_artifact_dialog_component__WEBPACK_IMPORTED_MODULE_47__["AddArtifactDialogComponent"], _main_components_work_space_message_thread_work_space_message_thread_component__WEBPACK_IMPORTED_MODULE_48__["WorkSpaceMessageThreadComponent"], _main_components_work_space_message_thread_work_space_message_thread_reply_card_work_space_message_thread_reply_card_component__WEBPACK_IMPORTED_MODULE_49__["WorkSpaceMessageThreadReplyCardComponent"], _main_dialogs_create_workspace_thread_dialog_create_workspace_thread_dialog_component__WEBPACK_IMPORTED_MODULE_50__["CreateWorkspaceThreadDialogComponent"], _main_components_chat_chat_component__WEBPACK_IMPORTED_MODULE_51__["ChatComponent"], _main_components_chat_chat_rooms_chat_rooms_component__WEBPACK_IMPORTED_MODULE_53__["ChatRoomsComponent"], _main_dialogs_chat_contacts_dialog_chat_contacts_dialog_component__WEBPACK_IMPORTED_MODULE_54__["ChatContactsDialogComponent"]],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"], _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatButtonModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_7__["MatMenuModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_7__["MatMenuModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_14__["MatIconModule"], _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatToolbarModule"], _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatInputModule"], _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatTooltipModule"], _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatFormFieldModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_16__["HttpClientModule"], _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatTabsModule"], _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatSnackBarModule"], _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatSelectModule"], _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatListModule"], _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatDialogModule"], _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatDatepickerModule"], _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatNativeDateModule"], _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatCardModule"], _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatProgressBarModule"], _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatTableModule"], ngx_doc_viewer__WEBPACK_IMPORTED_MODULE_31__["NgxDocViewerModule"], _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatGridListModule"], _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatTreeModule"], _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatAutocompleteModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_37__["ReactiveFormsModule"], _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatProgressSpinnerModule"], ngx_extended_pdf_viewer__WEBPACK_IMPORTED_MODULE_3__["NgxExtendedPdfViewerModule"], _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatPaginatorModule"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_10__["MatExpansionModule"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_9__["MatChipsModule"]],
      entryComponents: [_main_dialogs_add_artifact_dialog_add_artifact_dialog_component__WEBPACK_IMPORTED_MODULE_47__["AddArtifactDialogComponent"], _main_dialogs_create_artifact_dialog_create_dialog_component__WEBPACK_IMPORTED_MODULE_24__["CreateDialogComponent"], _main_dialogs_upload_artifact_dialog_upload_dialog_component__WEBPACK_IMPORTED_MODULE_27__["UploadDialogComponent"], _main_dialogs_delete_artifact_dialog_delete_artifact_dialog_component__WEBPACK_IMPORTED_MODULE_34__["DeleteArtifactDialogComponent"], _main_dialogs_team_invite_dialog_invite_dialog_component__WEBPACK_IMPORTED_MODULE_35__["InviteDialogComponent"], _main_dialogs_create_work_space_dialog_create_work_space_dialog_component__WEBPACK_IMPORTED_MODULE_40__["CreateWorkSpaceDialogComponent"], _main_dialogs_work_space_add_member_dialog_work_space_add_member_component__WEBPACK_IMPORTED_MODULE_44__["WorkSpaceAddMemberComponent"], _main_dialogs_create_message_dialog_create_message_dialog_component__WEBPACK_IMPORTED_MODULE_46__["CreateMessageDialogComponent"], _main_dialogs_create_workspace_thread_dialog_create_workspace_thread_dialog_component__WEBPACK_IMPORTED_MODULE_50__["CreateWorkspaceThreadDialogComponent"], _main_dialogs_chat_contacts_dialog_chat_contacts_dialog_component__WEBPACK_IMPORTED_MODULE_54__["ChatContactsDialogComponent"]],
      providers: [_services_user_service__WEBPACK_IMPORTED_MODULE_17__["UserService"], _services_organization_service__WEBPACK_IMPORTED_MODULE_21__["OrganizationService"], _services_artifacts_service__WEBPACK_IMPORTED_MODULE_23__["ArtifactsService"], _services_document_service__WEBPACK_IMPORTED_MODULE_26__["DocumentService"], _models_environment__WEBPACK_IMPORTED_MODULE_28__["Environment"], _services_member_service__WEBPACK_IMPORTED_MODULE_32__["MemberService"], _services_work_space_service__WEBPACK_IMPORTED_MODULE_39__["WorkSpaceService"], _services_util_service__WEBPACK_IMPORTED_MODULE_42__["UtilService"], _services_chat_service__WEBPACK_IMPORTED_MODULE_52__["ChatService"]],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/home/header/header.component.css":
  /*!**************************************************!*\
    !*** ./src/app/home/header/header.component.css ***!
    \**************************************************/

  /*! exports provided: default */

  /***/
  function srcAppHomeHeaderHeaderComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/home/header/header.component.ts":
  /*!*************************************************!*\
    !*** ./src/app/home/header/header.component.ts ***!
    \*************************************************/

  /*! exports provided: HeaderComponent */

  /***/
  function srcAppHomeHeaderHeaderComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HeaderComponent", function () {
      return HeaderComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    let HeaderComponent = class HeaderComponent {
      constructor() {}

      ngOnInit() {}

    };
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-header',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./header.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/home/header/header.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./header.component.css */
      "./src/app/home/header/header.component.css")).default]
    })], HeaderComponent);
    /***/
  },

  /***/
  "./src/app/home/landing-page/landing-page.component.css":
  /*!**************************************************************!*\
    !*** ./src/app/home/landing-page/landing-page.component.css ***!
    \**************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppHomeLandingPageLandingPageComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".header\n{\n    height: 80px;\n    width: 100%;\n    background-color: #512DA8;\n    height: 70px;\n}\n\n.title\n{\n    margin: 0;\n    color:white;\n    position: relative;\n    top:15px;\n    left: 50px;\n    width: 300px;\n}\n\n.nav\n{\n    -webkit-box-flex: initial;\n            flex: initial;\n}\n\n.intro-page\n{\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-pack: space-evenly;\n            justify-content: space-evenly;\n}\n\n.intro-container { \n    margin-top: 100px;\n}\n\n.intro {\n    display: inline-block;\n    vertical-align: middle;\n    line-height: normal;\n    font-size: 70px;\n    text-align: center;\n}\n\n.emph\n{\n    color: #3597fa;\n}\n\n.intro-img\n{\n    margin-top: 80px;\n}\n\n.action-btn\n{\n    width: 150px;\n    margin: 10px;\n}\n\n@media only screen and (max-width: 909px) {\n    .img {\n      display: none;\n    }\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9sYW5kaW5nLXBhZ2UvbGFuZGluZy1wYWdlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0lBRUksWUFBWTtJQUNaLFdBQVc7SUFDWCx5QkFBeUI7SUFDekIsWUFBWTtBQUNoQjs7QUFFQTs7SUFFSSxTQUFTO0lBQ1QsV0FBVztJQUNYLGtCQUFrQjtJQUNsQixRQUFRO0lBQ1IsVUFBVTtJQUNWLFlBQVk7QUFDaEI7O0FBRUE7O0lBRUkseUJBQWE7WUFBYixhQUFhO0FBQ2pCOztBQUVBOztJQUVJLG9CQUFhO0lBQWIsYUFBYTtJQUNiLDhCQUE2QjtZQUE3Qiw2QkFBNkI7QUFDakM7O0FBRUE7SUFDSSxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxxQkFBcUI7SUFDckIsc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQixlQUFlO0lBQ2Ysa0JBQWtCO0FBQ3RCOztBQUVBOztJQUVJLGNBQWM7QUFDbEI7O0FBRUE7O0lBRUksZ0JBQWdCO0FBQ3BCOztBQUVBOztJQUVJLFlBQVk7SUFDWixZQUFZO0FBQ2hCOztBQUVBO0lBQ0k7TUFDRSxhQUFhO0lBQ2Y7RUFDRiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvbGFuZGluZy1wYWdlL2xhbmRpbmctcGFnZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhlYWRlclxue1xuICAgIGhlaWdodDogODBweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNTEyREE4O1xuICAgIGhlaWdodDogNzBweDtcbn1cblxuLnRpdGxlXG57XG4gICAgbWFyZ2luOiAwO1xuICAgIGNvbG9yOndoaXRlO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB0b3A6MTVweDtcbiAgICBsZWZ0OiA1MHB4O1xuICAgIHdpZHRoOiAzMDBweDtcbn1cblxuLm5hdlxue1xuICAgIGZsZXg6IGluaXRpYWw7XG59XG5cbi5pbnRyby1wYWdlXG57XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcbn1cblxuLmludHJvLWNvbnRhaW5lciB7IFxuICAgIG1hcmdpbi10b3A6IDEwMHB4O1xufVxuXG4uaW50cm8ge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgIGxpbmUtaGVpZ2h0OiBub3JtYWw7XG4gICAgZm9udC1zaXplOiA3MHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmVtcGhcbntcbiAgICBjb2xvcjogIzM1OTdmYTtcbn1cblxuLmludHJvLWltZ1xue1xuICAgIG1hcmdpbi10b3A6IDgwcHg7XG59XG5cbi5hY3Rpb24tYnRuXG57XG4gICAgd2lkdGg6IDE1MHB4O1xuICAgIG1hcmdpbjogMTBweDtcbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5MDlweCkge1xuICAgIC5pbWcge1xuICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG4gIH0iXX0= */";
    /***/
  },

  /***/
  "./src/app/home/landing-page/landing-page.component.ts":
  /*!*************************************************************!*\
    !*** ./src/app/home/landing-page/landing-page.component.ts ***!
    \*************************************************************/

  /*! exports provided: LandingPageComponent */

  /***/
  function srcAppHomeLandingPageLandingPageComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LandingPageComponent", function () {
      return LandingPageComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    let LandingPageComponent = class LandingPageComponent {
      constructor() {}

      ngOnInit() {}

    };
    LandingPageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-landing-page',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./landing-page.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/home/landing-page/landing-page.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./landing-page.component.css */
      "./src/app/home/landing-page/landing-page.component.css")).default]
    })], LandingPageComponent);
    /***/
  },

  /***/
  "./src/app/home/login/login.component.css":
  /*!************************************************!*\
    !*** ./src/app/home/login/login.component.css ***!
    \************************************************/

  /*! exports provided: default */

  /***/
  function srcAppHomeLoginLoginComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".container\n{\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-pack: space-evenly;\n            justify-content: space-evenly;\n    margin-top: 100px;\n}\n\n@media only screen and (max-width:999px)\n{\n    .img\n    {\n        display: none;\n    }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztJQUVJLG9CQUFhO0lBQWIsYUFBYTtJQUNiLDhCQUE2QjtZQUE3Qiw2QkFBNkI7SUFDN0IsaUJBQWlCO0FBQ3JCOztBQUVBOztJQUVJOztRQUVJLGFBQWE7SUFDakI7QUFDSiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXJcbntcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xuICAgIG1hcmdpbi10b3A6IDEwMHB4O1xufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6OTk5cHgpXG57XG4gICAgLmltZ1xuICAgIHtcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/home/login/login.component.ts":
  /*!***********************************************!*\
    !*** ./src/app/home/login/login.component.ts ***!
    \***********************************************/

  /*! exports provided: LoginComponent */

  /***/
  function srcAppHomeLoginLoginComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginComponent", function () {
      return LoginComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");
    /* harmony import */


    var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/services/user.service */
    "./src/app/services/user.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    let LoginComponent = class LoginComponent {
      constructor(snackBar, userServ, router) {
        this.snackBar = snackBar;
        this.userServ = userServ;
        this.router = router;
      }

      ngOnInit() {}

      login(email, password) {
        if (password === '' || email === '') {
          alert("None of the fields can be empty");
        }

        this.userServ.login(email, password).subscribe(response => {
          let status = response.status;

          if (status === 200) {
            this.router.navigate(['/app']);
          } else if (status === 401) {
            this.snackBar.open("Looks like your email or password is incorrect", "Okay");
          }
        }, err => {
          console.log(err);
          this.snackBar.open("Looks like your email or password is incorrect", "Okay");
        });
      }

    };

    LoginComponent.ctorParameters = () => [{
      type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"]
    }, {
      type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]
    }, {
      type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
    }];

    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-login',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./login.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/home/login/login.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./login.component.css */
      "./src/app/home/login/login.component.css")).default]
    })], LoginComponent);
    /***/
  },

  /***/
  "./src/app/home/noaccess/noaccess.component.css":
  /*!******************************************************!*\
    !*** ./src/app/home/noaccess/noaccess.component.css ***!
    \******************************************************/

  /*! exports provided: default */

  /***/
  function srcAppHomeNoaccessNoaccessComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvbm9hY2Nlc3Mvbm9hY2Nlc3MuY29tcG9uZW50LmNzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/home/noaccess/noaccess.component.ts":
  /*!*****************************************************!*\
    !*** ./src/app/home/noaccess/noaccess.component.ts ***!
    \*****************************************************/

  /*! exports provided: NoaccessComponent */

  /***/
  function srcAppHomeNoaccessNoaccessComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NoaccessComponent", function () {
      return NoaccessComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    let NoaccessComponent = class NoaccessComponent {
      constructor() {}

      ngOnInit() {}

    };
    NoaccessComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-noaccess',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./noaccess.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/home/noaccess/noaccess.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./noaccess.component.css */
      "./src/app/home/noaccess/noaccess.component.css")).default]
    })], NoaccessComponent);
    /***/
  },

  /***/
  "./src/app/home/signup/signup-action/signup-action.component.css":
  /*!***********************************************************************!*\
    !*** ./src/app/home/signup/signup-action/signup-action.component.css ***!
    \***********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppHomeSignupSignupActionSignupActionComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".container\n{\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-pack: center;\n            justify-content: center;\n    margin-top: 10px;\n}\n\n.tab-item\n{\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-pack: center;\n            justify-content: center;\n}\n\n@media only screen and (max-width:999px)\n{\n    .img\n    {\n        display: none;\n    }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9zaWdudXAvc2lnbnVwLWFjdGlvbi9zaWdudXAtYWN0aW9uLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0lBRUksb0JBQWE7SUFBYixhQUFhO0lBQ2Isd0JBQXVCO1lBQXZCLHVCQUF1QjtJQUN2QixnQkFBZ0I7QUFDcEI7O0FBRUE7O0lBRUksb0JBQWE7SUFBYixhQUFhO0lBQ2Isd0JBQXVCO1lBQXZCLHVCQUF1QjtBQUMzQjs7QUFFQTs7SUFFSTs7UUFFSSxhQUFhO0lBQ2pCO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC9ob21lL3NpZ251cC9zaWdudXAtYWN0aW9uL3NpZ251cC1hY3Rpb24uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXJcbntcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIG1hcmdpbi10b3A6IDEwcHg7XG59XG5cbi50YWItaXRlbVxue1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDo5OTlweClcbntcbiAgICAuaW1nXG4gICAge1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/home/signup/signup-action/signup-action.component.ts":
  /*!**********************************************************************!*\
    !*** ./src/app/home/signup/signup-action/signup-action.component.ts ***!
    \**********************************************************************/

  /*! exports provided: SignupActionComponent */

  /***/
  function srcAppHomeSignupSignupActionSignupActionComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SignupActionComponent", function () {
      return SignupActionComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_app_services_organization_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/services/organization.service */
    "./src/app/services/organization.service.ts");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    let SignupActionComponent = class SignupActionComponent {
      constructor(orgServ, snackBar, router) {
        this.orgServ = orgServ;
        this.snackBar = snackBar;
        this.router = router;
      }

      ngOnInit() {}

      createOrganization(name, orgKey, orgPassKey) {
        this.orgServ.createOrganization(name, orgKey, orgPassKey).subscribe(response => {
          let status = response.status;

          if (status === 201) {
            let snackBarRef = this.snackBar.open("Creation Success", "Next");
            snackBarRef.onAction().subscribe(() => {
              this.router.navigate(['/app']);
            });
          } else if (status == 409) {
            this.snackBar.open("It seems like the organization code already exists", "Okay");
          }
        });
      }

    };

    SignupActionComponent.ctorParameters = () => [{
      type: src_app_services_organization_service__WEBPACK_IMPORTED_MODULE_2__["OrganizationService"]
    }, {
      type: _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"]
    }, {
      type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
    }];

    SignupActionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-signup-action',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./signup-action.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/home/signup/signup-action/signup-action.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./signup-action.component.css */
      "./src/app/home/signup/signup-action/signup-action.component.css")).default]
    })], SignupActionComponent);
    /***/
  },

  /***/
  "./src/app/home/signup/signup.component.css":
  /*!**************************************************!*\
    !*** ./src/app/home/signup/signup.component.css ***!
    \**************************************************/

  /*! exports provided: default */

  /***/
  function srcAppHomeSignupSignupComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".container\n{\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-pack: space-evenly;\n            justify-content: space-evenly;\n    margin-top: 100px;\n}\n\n@media only screen and (max-width:999px)\n{\n    .img\n    {\n        display: none;\n    }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9zaWdudXAvc2lnbnVwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0lBRUksb0JBQWE7SUFBYixhQUFhO0lBQ2IsOEJBQTZCO1lBQTdCLDZCQUE2QjtJQUM3QixpQkFBaUI7QUFDckI7O0FBRUE7O0lBRUk7O1FBRUksYUFBYTtJQUNqQjtBQUNKIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9zaWdudXAvc2lnbnVwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyXG57XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcbiAgICBtYXJnaW4tdG9wOiAxMDBweDtcbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOjk5OXB4KVxue1xuICAgIC5pbWdcbiAgICB7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/home/signup/signup.component.ts":
  /*!*************************************************!*\
    !*** ./src/app/home/signup/signup.component.ts ***!
    \*************************************************/

  /*! exports provided: SignupComponent */

  /***/
  function srcAppHomeSignupSignupComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SignupComponent", function () {
      return SignupComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/services/user.service */
    "./src/app/services/user.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");

    let SignupComponent = class SignupComponent {
      constructor(userServ, router, snackBar) {
        this.userServ = userServ;
        this.router = router;
        this.snackBar = snackBar;
      }

      ngOnInit() {}

      signup(email, password) {
        if (this.password === '' || this.email === '') {
          alert("None of the fields can be empty");
        }

        this.userServ.signup(email, password).subscribe(response => {
          let status = response.status;

          if (status === 201) {
            let snackBarRef = this.snackBar.open("Sign Up Success", "Next");
            snackBarRef.onAction().subscribe(() => {
              this.router.navigate(['/signup/action']);
            });
          } else if (status === 409) {
            this.snackBar.open("It seems this email already exists", "Okay");
          }
        }, err => {
          console.log(err);
        });
      }

    };

    SignupComponent.ctorParameters = () => [{
      type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]
    }, {
      type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
    }, {
      type: _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"]
    }];

    SignupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-signup',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./signup.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/home/signup/signup.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./signup.component.css */
      "./src/app/home/signup/signup.component.css")).default]
    })], SignupComponent);
    /***/
  },

  /***/
  "./src/app/main/components/artifact/artifact.component.css":
  /*!*****************************************************************!*\
    !*** ./src/app/main/components/artifact/artifact.component.css ***!
    \*****************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppMainComponentsArtifactArtifactComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".doc-list\n{\n    overflow-y: scroll;\n    height: calc(100vh - 138px);\n    width: 40%;\n}\n\n.artifact-view\n{\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-pack: center;\n            justify-content: center;\n    padding: 30px;\n    height:calc(100vh - 189px);\n    overflow-y: scroll;\n}\n\nmat-list-item:hover\n{\n    background-color: #e9e7e7f5;\n}\n\n.artifact-view-absent\n{\n    height: calc(100vh - 138px);\n    border-left: 1px solid rgba(0, 0, 0, 0.12);\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-pack: center;\n            justify-content: center;\n    -webkit-box-align: center;\n            align-items: center;\n}\n\n.btn-group > button\n{\n  margin-left: 10px;\n}\n\n.util-bar\n{\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: end;\n          justify-content: flex-end;\n  -webkit-justify-content:flex-end; /* For chrome */\n  width:100%;\n}\n\n.margin-vertical\n{\n  margin-top: 10px;\n  margin-bottom: 10px;\n}\n\n.margin-horizontal\n{\n  margin-left:5px;\n  margin-right:5px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi9jb21wb25lbnRzL2FydGlmYWN0L2FydGlmYWN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0lBRUksa0JBQWtCO0lBQ2xCLDJCQUEyQjtJQUMzQixVQUFVO0FBQ2Q7O0FBRUE7O0lBRUksb0JBQWE7SUFBYixhQUFhO0lBQ2Isd0JBQXVCO1lBQXZCLHVCQUF1QjtJQUN2QixhQUFhO0lBQ2IsMEJBQTBCO0lBQzFCLGtCQUFrQjtBQUN0Qjs7QUFHQTs7SUFFSSwyQkFBMkI7QUFDL0I7O0FBRUE7O0lBRUksMkJBQTJCO0lBQzNCLDBDQUEwQztJQUMxQyxvQkFBYTtJQUFiLGFBQWE7SUFDYix3QkFBdUI7WUFBdkIsdUJBQXVCO0lBQ3ZCLHlCQUFtQjtZQUFuQixtQkFBbUI7QUFDdkI7O0FBRUE7O0VBRUUsaUJBQWlCO0FBQ25COztBQUVBOztFQUVFLG9CQUFhO0VBQWIsYUFBYTtFQUNiLHFCQUF5QjtVQUF6Qix5QkFBeUI7RUFDekIsZ0NBQWdDLEVBQUUsZUFBZTtFQUNqRCxVQUFVO0FBQ1o7O0FBRUE7O0VBRUUsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtBQUNyQjs7QUFFQTs7RUFFRSxlQUFlO0VBQ2YsZ0JBQWdCO0FBQ2xCIiwiZmlsZSI6InNyYy9hcHAvbWFpbi9jb21wb25lbnRzL2FydGlmYWN0L2FydGlmYWN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZG9jLWxpc3RcbntcbiAgICBvdmVyZmxvdy15OiBzY3JvbGw7XG4gICAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gMTM4cHgpO1xuICAgIHdpZHRoOiA0MCU7XG59XG5cbi5hcnRpZmFjdC12aWV3XG57XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBwYWRkaW5nOiAzMHB4O1xuICAgIGhlaWdodDpjYWxjKDEwMHZoIC0gMTg5cHgpO1xuICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcbn1cblxuXG5tYXQtbGlzdC1pdGVtOmhvdmVyXG57XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2U5ZTdlN2Y1O1xufVxuXG4uYXJ0aWZhY3Qtdmlldy1hYnNlbnRcbntcbiAgICBoZWlnaHQ6IGNhbGMoMTAwdmggLSAxMzhweCk7XG4gICAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmJ0bi1ncm91cCA+IGJ1dHRvblxue1xuICBtYXJnaW4tbGVmdDogMTBweDtcbn1cblxuLnV0aWwtYmFyXG57XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gIC13ZWJraXQtanVzdGlmeS1jb250ZW50OmZsZXgtZW5kOyAvKiBGb3IgY2hyb21lICovXG4gIHdpZHRoOjEwMCU7XG59XG5cbi5tYXJnaW4tdmVydGljYWxcbntcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cblxuLm1hcmdpbi1ob3Jpem9udGFsXG57XG4gIG1hcmdpbi1sZWZ0OjVweDtcbiAgbWFyZ2luLXJpZ2h0OjVweDtcbn1cbiJdfQ== */";
    /***/
  },

  /***/
  "./src/app/main/components/artifact/artifact.component.ts":
  /*!****************************************************************!*\
    !*** ./src/app/main/components/artifact/artifact.component.ts ***!
    \****************************************************************/

  /*! exports provided: ArtifactComponent */

  /***/
  function srcAppMainComponentsArtifactArtifactComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ArtifactComponent", function () {
      return ArtifactComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_app_services_artifacts_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/services/artifacts.service */
    "./src/app/services/artifacts.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var src_app_services_document_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/services/document.service */
    "./src/app/services/document.service.ts");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");
    /* harmony import */


    var _dialogs_upload_artifact_dialog_upload_dialog_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./../../dialogs/upload-artifact-dialog/upload-dialog.component */
    "./src/app/main/dialogs/upload-artifact-dialog/upload-dialog.component.ts");
    /* harmony import */


    var _dialogs_delete_artifact_dialog_delete_artifact_dialog_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./../../dialogs/delete-artifact-dialog/delete-artifact-dialog.component */
    "./src/app/main/dialogs/delete-artifact-dialog/delete-artifact-dialog.component.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");

    let ArtifactComponent = class ArtifactComponent {
      constructor(artServ, route, docServ, uploadDialog, deleteDialog, _location, snackBar) {
        this.artServ = artServ;
        this.route = route;
        this.docServ = docServ;
        this.uploadDialog = uploadDialog;
        this.deleteDialog = deleteDialog;
        this._location = _location;
        this.snackBar = snackBar;
        this.selectedDocument = null;
        this.docSelected = false;
        this.isImage = false;
      }

      ngOnInit() {
        let artID = this.route.snapshot.paramMap.get('id');
        this.artID = parseInt(artID);
        this.getArtifact(this.artID);
        this.getAllDocuments(this.artID);
        this.docServ.documentsObservable.subscribe(documents => {
          this.documents = documents;
        });
      }

      getArtifact(artID) {
        this.artServ.getArtifactFromID(artID).subscribe(artifact => {
          this.artifact = artifact;
        });
      }

      selectDocument(document) {
        this.docSelected = true;
        this.selectedDocument = document;
        let documentType = this.selectedDocument.type;
        let docID = this.selectedDocument.doc_id; // check if document is image

        if (documentType.split('/')[0] === 'image') this.isImage = true;else this.isImage = false;
        this.docServ.providePreviewLink(this.artID, docID).subscribe(response => {
          this.previewlink = response['download']; //let officeView = `https://view.officeapps.live.com/op/embed.aspx?src=${this.previewlink}`
          //this.sanitizer.bypassSecurityTrustResourceUrl(officeView)
        });
      }

      getAllDocuments(artID) {
        this.docServ.getDocuments(artID);
      }

      openUploadDialog() {
        let dialogRef = this.uploadDialog.open(_dialogs_upload_artifact_dialog_upload_dialog_component__WEBPACK_IMPORTED_MODULE_6__["UploadDialogComponent"], {
          width: "400px",
          data: {
            art_id: this.artID
          }
        });
      }

      openDeleteDialogue() {
        let dialogRef = this.deleteDialog.open(_dialogs_delete_artifact_dialog_delete_artifact_dialog_component__WEBPACK_IMPORTED_MODULE_7__["DeleteArtifactDialogComponent"], {
          width: "480px",
          data: {
            artifact_name: this.artifact.name,
            art_id: this.artID
          }
        });
      }

      deleteDocument(document) {
        const id = document.doc_id;
        this.docServ.deleteDocument(id).subscribe(observable => {
          const message = observable['message'];
          if (message === 'done') this.getAllDocuments(this.artID);
          this.snackBar.open("Document '".concat(document.version, "' was deleted, successfully"), 'Okay');
        });
      }

      goBack() {
        this._location.back();
      }

    };

    ArtifactComponent.ctorParameters = () => [{
      type: src_app_services_artifacts_service__WEBPACK_IMPORTED_MODULE_2__["ArtifactsService"]
    }, {
      type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
    }, {
      type: src_app_services_document_service__WEBPACK_IMPORTED_MODULE_4__["DocumentService"]
    }, {
      type: _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDialog"]
    }, {
      type: _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDialog"]
    }, {
      type: _angular_common__WEBPACK_IMPORTED_MODULE_8__["Location"]
    }, {
      type: _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"]
    }];

    ArtifactComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-artifact',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./artifact.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/main/components/artifact/artifact.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./artifact.component.css */
      "./src/app/main/components/artifact/artifact.component.css")).default]
    })], ArtifactComponent);
    /***/
  },

  /***/
  "./src/app/main/components/artifacts/artifacts.component.css":
  /*!*******************************************************************!*\
    !*** ./src/app/main/components/artifacts/artifacts.component.css ***!
    \*******************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppMainComponentsArtifactsArtifactsComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".mat-list-icon {\n  color: rgba(0, 0, 0, 0.54);\n}\n\nmat-list {\n  height: calc(100vh - 125px);\n  overflow-y: scroll;\n}\n\n.artifact-search {\n  width: 100%;\n}\n\n.mat-list-item:hover {\n  background-color: #e9e7e7f5;\n}\n\n.artifact-view {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  padding: 30px;\n}\n\n.artifact-view-absent {\n  height: calc(100vh - 115px);\n  border-left: 1px solid rgba(0, 0, 0, 0.12);\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n}\n\n.btn-group>button {\n  margin-left: 10px;\n}\n\n.modal-bg {\n  width: 100%;\n  height: 100%;\n  background-color: rgba(0, 0, 0, 0.12);\n  position: absolute;\n  z-index: 10;\n}\n\n.card-image {\n  width: 300px;\n}\n\n.grid {\n  width: 97%;\n  padding: 10px;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: start;\n          justify-content: flex-start;\n  flex-wrap: wrap;\n\n  padding-bottom: 9px;\n  padding-left: 9px;\n  padding-right: 9px;\n}\n\n.artifact-card {\n  margin: 5px;\n  cursor: default;\n}\n\n.noselect {\n  -webkit-touch-callout: none;\n  /* iOS Safari */\n  -webkit-user-select: none;\n  /* Safari */\n  /* Konqueror HTML */\n  -moz-user-select: none;\n  /* Old versions of Firefox */\n  -ms-user-select: none;\n  /* Internet Explorer/Edge */\n  user-select: none;\n  /* Non-prefixed version, currently\n                                  supported by Chrome, Opera and Firefox */\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi9jb21wb25lbnRzL2FydGlmYWN0cy9hcnRpZmFjdHMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLDBCQUEwQjtBQUM1Qjs7QUFFQTtFQUNFLDJCQUEyQjtFQUMzQixrQkFBa0I7QUFDcEI7O0FBR0E7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSwyQkFBMkI7QUFDN0I7O0FBRUE7RUFDRSxvQkFBYTtFQUFiLGFBQWE7RUFDYix3QkFBdUI7VUFBdkIsdUJBQXVCO0VBQ3ZCLGFBQWE7QUFDZjs7QUFFQTtFQUNFLDJCQUEyQjtFQUMzQiwwQ0FBMEM7RUFDMUMsb0JBQWE7RUFBYixhQUFhO0VBQ2Isd0JBQXVCO1VBQXZCLHVCQUF1QjtFQUN2Qix5QkFBbUI7VUFBbkIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixxQ0FBcUM7RUFDckMsa0JBQWtCO0VBQ2xCLFdBQVc7QUFDYjs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLFVBQVU7RUFDVixhQUFhO0VBQ2Isb0JBQWE7RUFBYixhQUFhO0VBQ2IsdUJBQTJCO1VBQTNCLDJCQUEyQjtFQUMzQixlQUFlOztFQUVmLG1CQUFtQjtFQUNuQixpQkFBaUI7RUFDakIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsV0FBVztFQUNYLGVBQWU7QUFDakI7O0FBRUE7RUFDRSwyQkFBMkI7RUFDM0IsZUFBZTtFQUNmLHlCQUF5QjtFQUN6QixXQUFXO0VBRVgsbUJBQW1CO0VBQ25CLHNCQUFzQjtFQUN0Qiw0QkFBNEI7RUFDNUIscUJBQXFCO0VBQ3JCLDJCQUEyQjtFQUMzQixpQkFBaUI7RUFDakI7MEVBQ3dFO0FBQzFFIiwiZmlsZSI6InNyYy9hcHAvbWFpbi9jb21wb25lbnRzL2FydGlmYWN0cy9hcnRpZmFjdHMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYXQtbGlzdC1pY29uIHtcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41NCk7XG59XG5cbm1hdC1saXN0IHtcbiAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gMTI1cHgpO1xuICBvdmVyZmxvdy15OiBzY3JvbGw7XG59XG5cblxuLmFydGlmYWN0LXNlYXJjaCB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4ubWF0LWxpc3QtaXRlbTpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlOWU3ZTdmNTtcbn1cblxuLmFydGlmYWN0LXZpZXcge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgcGFkZGluZzogMzBweDtcbn1cblxuLmFydGlmYWN0LXZpZXctYWJzZW50IHtcbiAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gMTE1cHgpO1xuICBib3JkZXItbGVmdDogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4xMik7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uYnRuLWdyb3VwPmJ1dHRvbiB7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xufVxuXG4ubW9kYWwtYmcge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMTIpO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHotaW5kZXg6IDEwO1xufVxuXG4uY2FyZC1pbWFnZSB7XG4gIHdpZHRoOiAzMDBweDtcbn1cblxuLmdyaWQge1xuICB3aWR0aDogOTclO1xuICBwYWRkaW5nOiAxMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gIGZsZXgtd3JhcDogd3JhcDtcblxuICBwYWRkaW5nLWJvdHRvbTogOXB4O1xuICBwYWRkaW5nLWxlZnQ6IDlweDtcbiAgcGFkZGluZy1yaWdodDogOXB4O1xufVxuXG4uYXJ0aWZhY3QtY2FyZCB7XG4gIG1hcmdpbjogNXB4O1xuICBjdXJzb3I6IGRlZmF1bHQ7XG59XG5cbi5ub3NlbGVjdCB7XG4gIC13ZWJraXQtdG91Y2gtY2FsbG91dDogbm9uZTtcbiAgLyogaU9TIFNhZmFyaSAqL1xuICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xuICAvKiBTYWZhcmkgKi9cbiAgLWtodG1sLXVzZXItc2VsZWN0OiBub25lO1xuICAvKiBLb25xdWVyb3IgSFRNTCAqL1xuICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xuICAvKiBPbGQgdmVyc2lvbnMgb2YgRmlyZWZveCAqL1xuICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XG4gIC8qIEludGVybmV0IEV4cGxvcmVyL0VkZ2UgKi9cbiAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gIC8qIE5vbi1wcmVmaXhlZCB2ZXJzaW9uLCBjdXJyZW50bHlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdXBwb3J0ZWQgYnkgQ2hyb21lLCBPcGVyYSBhbmQgRmlyZWZveCAqL1xufVxuIl19 */";
    /***/
  },

  /***/
  "./src/app/main/components/artifacts/artifacts.component.ts":
  /*!******************************************************************!*\
    !*** ./src/app/main/components/artifacts/artifacts.component.ts ***!
    \******************************************************************/

  /*! exports provided: ArtifactsComponent */

  /***/
  function srcAppMainComponentsArtifactsArtifactsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ArtifactsComponent", function () {
      return ArtifactsComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_app_services_artifacts_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/services/artifacts.service */
    "./src/app/services/artifacts.service.ts");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");
    /* harmony import */


    var _dialogs_create_artifact_dialog_create_dialog_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./../../dialogs/create-artifact-dialog/create-dialog.component */
    "./src/app/main/dialogs/create-artifact-dialog/create-dialog.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    let ArtifactsComponent = class ArtifactsComponent {
      constructor(artServ, dialog, router) {
        this.artServ = artServ;
        this.dialog = dialog;
        this.router = router;
        this.isInDocView = false;
        this.isArtifactSelected = false;
      }

      ngOnInit() {
        this.artServ.artifactsObservable.subscribe(artifacts => {
          this.artifacts = artifacts;
        });
        this.getAllArtifacts();
      }

      getAllArtifacts() {
        this.artServ.getAllArtifacts();
      }

      selectArtifact(artifact) {
        this.selectedArtifact = artifact;
        this.isArtifactSelected = true;
      }

      viewDetails(artifact) {
        let artID = artifact.art_id;
        this.router.navigate(['/app/artifact/', artID]);
      }

      openDialog() {
        let dialogRef = this.dialog.open(_dialogs_create_artifact_dialog_create_dialog_component__WEBPACK_IMPORTED_MODULE_4__["CreateDialogComponent"], {
          width: "400px"
        });
      }

      nameSearch(event) {
        let key = event.target['value'];
        this.artServ.nameSearch(key);
      }

    };

    ArtifactsComponent.ctorParameters = () => [{
      type: src_app_services_artifacts_service__WEBPACK_IMPORTED_MODULE_2__["ArtifactsService"]
    }, {
      type: _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"]
    }, {
      type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
    }];

    ArtifactsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-artifacts',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./artifacts.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/main/components/artifacts/artifacts.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./artifacts.component.css */
      "./src/app/main/components/artifacts/artifacts.component.css")).default]
    })], ArtifactsComponent);
    /***/
  },

  /***/
  "./src/app/main/components/chat/chat-rooms/chat-rooms.component.css":
  /*!**************************************************************************!*\
    !*** ./src/app/main/components/chat/chat-rooms/chat-rooms.component.css ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppMainComponentsChatChatRoomsChatRoomsComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".chat-room-container\n{\n    width: 200px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi9jb21wb25lbnRzL2NoYXQvY2hhdC1yb29tcy9jaGF0LXJvb21zLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0lBRUksWUFBWTtBQUNoQiIsImZpbGUiOiJzcmMvYXBwL21haW4vY29tcG9uZW50cy9jaGF0L2NoYXQtcm9vbXMvY2hhdC1yb29tcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNoYXQtcm9vbS1jb250YWluZXJcbntcbiAgICB3aWR0aDogMjAwcHg7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/main/components/chat/chat-rooms/chat-rooms.component.ts":
  /*!*************************************************************************!*\
    !*** ./src/app/main/components/chat/chat-rooms/chat-rooms.component.ts ***!
    \*************************************************************************/

  /*! exports provided: ChatRoomsComponent */

  /***/
  function srcAppMainComponentsChatChatRoomsChatRoomsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ChatRoomsComponent", function () {
      return ChatRoomsComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");
    /* harmony import */


    var src_app_main_dialogs_chat_contacts_dialog_chat_contacts_dialog_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/main/dialogs/chat-contacts-dialog/chat-contacts-dialog.component */
    "./src/app/main/dialogs/chat-contacts-dialog/chat-contacts-dialog.component.ts");
    /* harmony import */


    var src_app_services_chat_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/services/chat.service */
    "./src/app/services/chat.service.ts");

    let ChatRoomsComponent = class ChatRoomsComponent {
      constructor(chatService, matDialog) {
        this.chatService = chatService;
        this.matDialog = matDialog;
        this.onActiveChat = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
      }

      ngOnInit() {}

      loadMessages(activeChat) {
        //let selectedActiveChat = this.selectedActiveChat;
        let isChatSelected = true;
        let selectedChatRoomID = activeChat.chat_room_id; // TODO : Work on isolating the user object in this component

        let recieverID = this.user.user_id === activeChat.sender_id ? activeChat.reciever_id : activeChat.sender_id;
        this.chatService.getMessagesFromChat(activeChat.chat_room_id); // Emit selected chat info to the parent

        this.onActiveChat.emit({
          isChatSelected,
          selectedChatRoomID,
          recieverID,
          activeChat
        }); //let socket.emit("join_room",this.selectedChatRoomID)
      }

      openContactList() {
        this.matDialog.open(src_app_main_dialogs_chat_contacts_dialog_chat_contacts_dialog_component__WEBPACK_IMPORTED_MODULE_3__["ChatContactsDialogComponent"], {
          width: "500px",
          height: "500px"
        });
      }

    };

    ChatRoomsComponent.ctorParameters = () => [{
      type: src_app_services_chat_service__WEBPACK_IMPORTED_MODULE_4__["ChatService"]
    }, {
      type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]
    }];

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()], ChatRoomsComponent.prototype, "onActiveChat", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], ChatRoomsComponent.prototype, "user", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], ChatRoomsComponent.prototype, "activeChats", void 0);
    ChatRoomsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-chat-rooms',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./chat-rooms.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/main/components/chat/chat-rooms/chat-rooms.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./chat-rooms.component.css */
      "./src/app/main/components/chat/chat-rooms/chat-rooms.component.css")).default]
    })], ChatRoomsComponent);
    /***/
  },

  /***/
  "./src/app/main/components/chat/chat.component.css":
  /*!*********************************************************!*\
    !*** ./src/app/main/components/chat/chat.component.css ***!
    \*********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppMainComponentsChatChatComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".btn-group>button {\n  margin-right: 10px;\n}\n\n.chat-component {\n  display: -webkit-box;\n  display: flex;\n  height: calc(100vh - 112px);\n}\n\n.action-bar {\n  display: -webkit-box;\n  display: flex;\n  padding: 10px;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n}\n\n.text-input {\n  width: 100%;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n}\n\n.chat-section {\n  width: 65%;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n}\n\n.messages {\n  height: calc(100% - 53px);\n  overflow: scroll;\n}\n\n#chat-bubble {\n  background: #454545;\n  color: white;\n  padding: 10px;\n  margin-left: 10px;\n  border-radius: 10px;\n  min-width: 20px;\n  max-width: 40%;\n}\n\n#chat-bubble:after {\n  content: '';\n  position: absolute;\n  right: 0;\n  top: 50%;\n  width: 0;\n  height: 0;\n  border: 20px solid transparent;\n  border-left-color: #00aabb;\n  border-right: 0;\n  margin-top: -20px;\n  margin-right: -20px;\n}\n\n/* Hide scrollbar for Chrome, Safari and Opera */\n\n.hide-scroll-bar::-webkit-scrollbar {\n  display: none;\n}\n\n/* Hide scrollbar for IE, Edge and Firefox */\n\n.hide-scroll-bar {\n  -ms-overflow-style: none;\n  /* IE and Edge */\n  scrollbar-width: none;\n  /* Firefox */\n}\n\n.chat-rooms\n{\n  width: 35%;\n  display: -webkit-box;\n  display: flex;\n  padding: 10px;\n  -webkit-box-pack: center;\n          justify-content: center;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi9jb21wb25lbnRzL2NoYXQvY2hhdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0Usb0JBQWE7RUFBYixhQUFhO0VBQ2IsMkJBQTJCO0FBQzdCOztBQUVBO0VBQ0Usb0JBQWE7RUFBYixhQUFhO0VBQ2IsYUFBYTtFQUNiLHlCQUE4QjtVQUE5Qiw4QkFBOEI7RUFDOUIsNEJBQXNCO0VBQXRCLDZCQUFzQjtVQUF0QixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsb0JBQWE7RUFBYixhQUFhO0VBQ2Isd0JBQXVCO1VBQXZCLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLFVBQVU7RUFDVixvQkFBYTtFQUFiLGFBQWE7RUFDYiw0QkFBc0I7RUFBdEIsNkJBQXNCO1VBQXRCLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsWUFBWTtFQUNaLGFBQWE7RUFDYixpQkFBaUI7RUFDakIsbUJBQW1CO0VBQ25CLGVBQWU7RUFDZixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsUUFBUTtFQUNSLFFBQVE7RUFDUixTQUFTO0VBQ1QsOEJBQThCO0VBQzlCLDBCQUEwQjtFQUMxQixlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLG1CQUFtQjtBQUNyQjs7QUFFQSxnREFBZ0Q7O0FBQ2hEO0VBQ0UsYUFBYTtBQUNmOztBQUVBLDRDQUE0Qzs7QUFDNUM7RUFDRSx3QkFBd0I7RUFDeEIsZ0JBQWdCO0VBQ2hCLHFCQUFxQjtFQUNyQixZQUFZO0FBQ2Q7O0FBRUE7O0VBRUUsVUFBVTtFQUNWLG9CQUFhO0VBQWIsYUFBYTtFQUNiLGFBQWE7RUFDYix3QkFBdUI7VUFBdkIsdUJBQXVCO0FBQ3pCIiwiZmlsZSI6InNyYy9hcHAvbWFpbi9jb21wb25lbnRzL2NoYXQvY2hhdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJ0bi1ncm91cD5idXR0b24ge1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG59XG5cbi5jaGF0LWNvbXBvbmVudCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGhlaWdodDogY2FsYygxMDB2aCAtIDExMnB4KTtcbn1cblxuLmFjdGlvbi1iYXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBwYWRkaW5nOiAxMHB4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbi50ZXh0LWlucHV0IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4uY2hhdC1zZWN0aW9uIHtcbiAgd2lkdGg6IDY1JTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuLm1lc3NhZ2VzIHtcbiAgaGVpZ2h0OiBjYWxjKDEwMCUgLSA1M3B4KTtcbiAgb3ZlcmZsb3c6IHNjcm9sbDtcbn1cblxuI2NoYXQtYnViYmxlIHtcbiAgYmFja2dyb3VuZDogIzQ1NDU0NTtcbiAgY29sb3I6IHdoaXRlO1xuICBwYWRkaW5nOiAxMHB4O1xuICBtYXJnaW4tbGVmdDogMTBweDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgbWluLXdpZHRoOiAyMHB4O1xuICBtYXgtd2lkdGg6IDQwJTtcbn1cblxuI2NoYXQtYnViYmxlOmFmdGVyIHtcbiAgY29udGVudDogJyc7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDA7XG4gIHRvcDogNTAlO1xuICB3aWR0aDogMDtcbiAgaGVpZ2h0OiAwO1xuICBib3JkZXI6IDIwcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci1sZWZ0LWNvbG9yOiAjMDBhYWJiO1xuICBib3JkZXItcmlnaHQ6IDA7XG4gIG1hcmdpbi10b3A6IC0yMHB4O1xuICBtYXJnaW4tcmlnaHQ6IC0yMHB4O1xufVxuXG4vKiBIaWRlIHNjcm9sbGJhciBmb3IgQ2hyb21lLCBTYWZhcmkgYW5kIE9wZXJhICovXG4uaGlkZS1zY3JvbGwtYmFyOjotd2Via2l0LXNjcm9sbGJhciB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi8qIEhpZGUgc2Nyb2xsYmFyIGZvciBJRSwgRWRnZSBhbmQgRmlyZWZveCAqL1xuLmhpZGUtc2Nyb2xsLWJhciB7XG4gIC1tcy1vdmVyZmxvdy1zdHlsZTogbm9uZTtcbiAgLyogSUUgYW5kIEVkZ2UgKi9cbiAgc2Nyb2xsYmFyLXdpZHRoOiBub25lO1xuICAvKiBGaXJlZm94ICovXG59XG5cbi5jaGF0LXJvb21zXG57XG4gIHdpZHRoOiAzNSU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuIl19 */";
    /***/
  },

  /***/
  "./src/app/main/components/chat/chat.component.ts":
  /*!********************************************************!*\
    !*** ./src/app/main/components/chat/chat.component.ts ***!
    \********************************************************/

  /*! exports provided: ChatComponent */

  /***/
  function srcAppMainComponentsChatChatComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ChatComponent", function () {
      return ChatComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_app_services_chat_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/services/chat.service */
    "./src/app/services/chat.service.ts");
    /* harmony import */


    var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/services/user.service */
    "./src/app/services/user.service.ts");
    /* harmony import */


    var src_app_services_socket_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/services/socket.service */
    "./src/app/services/socket.service.ts");
    /* harmony import */


    var src_app_services_util_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/services/util.service */
    "./src/app/services/util.service.ts");

    let ChatComponent = class ChatComponent {
      constructor(chatService, userService, socketService, utilService // used in template
      ) {
        this.chatService = chatService;
        this.userService = userService;
        this.socketService = socketService;
        this.utilService = utilService; //private selectedActiveChat: ActiveChat;

        this.isChatSelected = false;
        this.audioFile = new Audio("./../../../../assets/sound_fx/msg_sent.mp3");
      }

      ngOnInit() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
          this.scrollToBottom(); //this.audioFile.load();

          this.chatService.activeChatsObservable.subscribe(activeChats => {
            this.activeChats = activeChats;
            console.log(this.activeChats);
          });
          this.chatService.chatMessagesObservable.subscribe(chatMessages => {
            this.chatMessages = chatMessages;
          });
          yield this.userService.getUserInfo().subscribe(user => {
            this.user = user;
            this.user.full_name = user.first_name + " " + user.last_name;
          });
          this.getActiveChats();
          this.socketService.socket.on("update_chat_room", val => {
            console.log(val);

            if (val.chatRoomID === this.selectedChatRoomID) {
              this.getMessages(val.chatRoomID);
              this.getActiveChats();
            } else {
              this.getActiveChats();
            }
          });
        });
      }
      /**
      loadMessages(activeChat: ActiveChat) {
        this.selectedActiveChat = this.selectedActiveChat;
        this.isChatSelected = true;
        this.selectedChatRoomID = activeChat.chat_room_id;
        this.recieverID = this.user.user_id === activeChat.sender_id ? activeChat.reciever_id : activeChat.sender_id
        this.getMessages(activeChat.chat_room_id)
        this.socketService.socket.emit("join_room", this.selectedChatRoomID)
      }**/


      onAcitveChatSelected(event) {
        this.isChatSelected = event.isChatSelected;
        this.selectedChatRoomID = event.selectedChatRoomID;
        this.recieverID = event.recieverID;
      }

      getMessages(chatRoomID) {
        this.chatService.getMessagesFromChat(chatRoomID);
      }

      sendMessage(content) {
        let timestamp = new Date().getTime(); // Sends message to be created in the database

        this.chatService.sendMessage(content, this.selectedChatRoomID, "".concat(timestamp), this.recieverID, this.user.user_id).subscribe(response => {
          console.log(response.status); // Reload messages for selected chat

          this.chatService.getMessagesFromChat(this.selectedChatRoomID);
          this.chatService.chatMessagesObservable.subscribe(chatMessages => {
            this.chatMessages = chatMessages;
          });
        });
        this.socketService.socket.emit("internal_message", {
          chatRoomID: this.selectedChatRoomID,
          message: content
        });
        this.audioFile.play();
      }

      getActiveChats() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
          yield this.chatService.getActiveChats();
        });
      }

      determineFloat(chatMessage) {
        return this.user.user_id === chatMessage.sender_id ? {
          'justify-content': 'flex-end',
          'display': 'flex'
        } : {
          'justify-content': 'flex-start',
          'display': 'flex'
        };
      }

      ngAfterViewChecked() {
        this.scrollToBottom();
      }

      scrollToBottom() {
        try {
          this.myScrollContainer.nativeElement.scrollTop = this.myScrollContainer.nativeElement.scrollHeight;
        } catch (err) {}
      }

      getTimeDifference(timestamp) {
        const current = new Date().getTime();
        return this.utilService.timeDifference(current, timestamp);
      }

    };

    ChatComponent.ctorParameters = () => [{
      type: src_app_services_chat_service__WEBPACK_IMPORTED_MODULE_2__["ChatService"]
    }, {
      type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]
    }, {
      type: src_app_services_socket_service__WEBPACK_IMPORTED_MODULE_4__["SocketService"]
    }, {
      type: src_app_services_util_service__WEBPACK_IMPORTED_MODULE_5__["UtilService"] // used in template

    }];

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('scrollMe', null)], ChatComponent.prototype, "myScrollContainer", void 0);
    ChatComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-chat',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./chat.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/main/components/chat/chat.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./chat.component.css */
      "./src/app/main/components/chat/chat.component.css")).default]
    })], ChatComponent);
    /***/
  },

  /***/
  "./src/app/main/components/main-header/main-header.component.css":
  /*!***********************************************************************!*\
    !*** ./src/app/main/components/main-header/main-header.component.css ***!
    \***********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppMainComponentsMainHeaderMainHeaderComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "mat-toolbar-row\n{\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-pack: justify;\n            justify-content: space-between;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi9jb21wb25lbnRzL21haW4taGVhZGVyL21haW4taGVhZGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0lBRUksb0JBQWE7SUFBYixhQUFhO0lBQ2IseUJBQThCO1lBQTlCLDhCQUE4QjtBQUNsQyIsImZpbGUiOiJzcmMvYXBwL21haW4vY29tcG9uZW50cy9tYWluLWhlYWRlci9tYWluLWhlYWRlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsibWF0LXRvb2xiYXItcm93XG57XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/main/components/main-header/main-header.component.ts":
  /*!**********************************************************************!*\
    !*** ./src/app/main/components/main-header/main-header.component.ts ***!
    \**********************************************************************/

  /*! exports provided: MainHeaderComponent */

  /***/
  function srcAppMainComponentsMainHeaderMainHeaderComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MainHeaderComponent", function () {
      return MainHeaderComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_app_services_organization_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/services/organization.service */
    "./src/app/services/organization.service.ts");
    /* harmony import */


    var src_app_models_organization__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/models/organization */
    "./src/app/models/organization.ts");
    /* harmony import */


    var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/services/user.service */
    "./src/app/services/user.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    let MainHeaderComponent = class MainHeaderComponent {
      constructor(orgServe, userServ, router) {
        this.orgServe = orgServe;
        this.userServ = userServ;
        this.router = router;
        this.organization = new src_app_models_organization__WEBPACK_IMPORTED_MODULE_3__["Organization"]({});
        this.fullName = '';
      }

      ngOnInit() {
        this.getOrganization().then(data => {
          this.organization = new src_app_models_organization__WEBPACK_IMPORTED_MODULE_3__["Organization"](data);
        });
        this.getUser().subscribe(user => {
          this.user = user;
          this.fullName = "".concat(this.user.first_name, " ").concat(this.user.last_name);
        }); //const socket = io('http://localhost:3000');
        //socket.emit('foo',{helloworld:'Colin Campbell'})
      }

      getOrganization() {
        return this.orgServe.getOrganization();
      }

      getUser() {
        return this.userServ.getUserInfo();
      }

      logOut() {
        this.userServ.signOut().subscribe(observer => {
          if (observer['message'] === 'ok') this.router.navigate(['/login']);
        });
      }

    };

    MainHeaderComponent.ctorParameters = () => [{
      type: src_app_services_organization_service__WEBPACK_IMPORTED_MODULE_2__["OrganizationService"]
    }, {
      type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"]
    }, {
      type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
    }];

    MainHeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-main-header',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./main-header.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/main/components/main-header/main-header.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./main-header.component.css */
      "./src/app/main/components/main-header/main-header.component.css")).default]
    })], MainHeaderComponent);
    /***/
  },

  /***/
  "./src/app/main/components/team/team-invite/team-invite.component.css":
  /*!****************************************************************************!*\
    !*** ./src/app/main/components/team/team-invite/team-invite.component.css ***!
    \****************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppMainComponentsTeamTeamInviteTeamInviteComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".container\n{\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-pack: center;\n            justify-content: center;\n    -webkit-box-align: center;\n            align-items: center;\n    height: 90vh;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi9jb21wb25lbnRzL3RlYW0vdGVhbS1pbnZpdGUvdGVhbS1pbnZpdGUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7SUFFSSxvQkFBYTtJQUFiLGFBQWE7SUFDYix3QkFBdUI7WUFBdkIsdUJBQXVCO0lBQ3ZCLHlCQUFtQjtZQUFuQixtQkFBbUI7SUFDbkIsWUFBWTtBQUNoQiIsImZpbGUiOiJzcmMvYXBwL21haW4vY29tcG9uZW50cy90ZWFtL3RlYW0taW52aXRlL3RlYW0taW52aXRlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyXG57XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGhlaWdodDogOTB2aDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/main/components/team/team-invite/team-invite.component.ts":
  /*!***************************************************************************!*\
    !*** ./src/app/main/components/team/team-invite/team-invite.component.ts ***!
    \***************************************************************************/

  /*! exports provided: TeamInviteComponent */

  /***/
  function srcAppMainComponentsTeamTeamInviteTeamInviteComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TeamInviteComponent", function () {
      return TeamInviteComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var src_app_services_organization_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/services/organization.service */
    "./src/app/services/organization.service.ts");
    /* harmony import */


    var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/services/user.service */
    "./src/app/services/user.service.ts");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");

    let TeamInviteComponent = class TeamInviteComponent {
      constructor(route, orgServ, userServ, snackBar, router) {
        this.route = route;
        this.orgServ = orgServ;
        this.userServ = userServ;
        this.snackBar = snackBar;
        this.router = router;
      }

      ngOnInit() {
        this.accessCode = this.route.snapshot.paramMap.get('id');
        this.orgServ.getOrganizyionFromAccessCode(this.accessCode).subscribe(observer => {
          this.organizationName = observer['org_name'];
        });
      } // TODO : Fix this later


      signUpUser(email, password) {
        this.userServ.signup(email, password).subscribe(response => {
          let status = response.status;

          if (status === 201) {
            this.orgServ.addUserToOganization(this.accessCode).subscribe(response => {
              let status = response.status;

              if (status === 201) {
                let snackBarRef = this.snackBar.open('You joined successfully. Please check your email to verify your account', 'Ok');
                snackBarRef.onAction().subscribe(() => {
                  this.router.navigate(['/login']);
                });
              }
            });
          }
        });
      }

    };

    TeamInviteComponent.ctorParameters = () => [{
      type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
    }, {
      type: src_app_services_organization_service__WEBPACK_IMPORTED_MODULE_3__["OrganizationService"]
    }, {
      type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"]
    }, {
      type: _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"]
    }, {
      type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
    }];

    TeamInviteComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-team-invite',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./team-invite.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/main/components/team/team-invite/team-invite.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./team-invite.component.css */
      "./src/app/main/components/team/team-invite/team-invite.component.css")).default]
    })], TeamInviteComponent);
    /***/
  },

  /***/
  "./src/app/main/components/team/team.component.css":
  /*!*********************************************************!*\
    !*** ./src/app/main/components/team/team.component.css ***!
    \*********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppMainComponentsTeamTeamComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "table \n{\n    width: 100%;\n    margin-top: -30px;\n    box-shadow: none;\n}\n\n.btn-group > button\n{\n    margin-right: 10px;\n}\n\n.action-bar\n{\n    display: -webkit-box;\n    display: flex;\n    padding: 10px;\n    -webkit-box-pack: justify;\n            justify-content: space-between;\n}\n\n.filter-fields\n{\n    /* Put something here*/\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi9jb21wb25lbnRzL3RlYW0vdGVhbS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztJQUVJLFdBQVc7SUFDWCxpQkFBaUI7SUFDakIsZ0JBQWdCO0FBQ3BCOztBQUVBOztJQUVJLGtCQUFrQjtBQUN0Qjs7QUFFQTs7SUFFSSxvQkFBYTtJQUFiLGFBQWE7SUFDYixhQUFhO0lBQ2IseUJBQThCO1lBQTlCLDhCQUE4QjtBQUNsQzs7QUFFQTs7SUFFSSxzQkFBc0I7QUFDMUIiLCJmaWxlIjoic3JjL2FwcC9tYWluL2NvbXBvbmVudHMvdGVhbS90ZWFtLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJ0YWJsZSBcbntcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXJnaW4tdG9wOiAtMzBweDtcbiAgICBib3gtc2hhZG93OiBub25lO1xufVxuXG4uYnRuLWdyb3VwID4gYnV0dG9uXG57XG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xufVxuXG4uYWN0aW9uLWJhclxue1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG4gIFxuLmZpbHRlci1maWVsZHNcbntcbiAgICAvKiBQdXQgc29tZXRoaW5nIGhlcmUqL1xufVxuIl19 */";
    /***/
  },

  /***/
  "./src/app/main/components/team/team.component.ts":
  /*!********************************************************!*\
    !*** ./src/app/main/components/team/team.component.ts ***!
    \********************************************************/

  /*! exports provided: TeamComponent */

  /***/
  function srcAppMainComponentsTeamTeamComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TeamComponent", function () {
      return TeamComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_app_services_member_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/services/member.service */
    "./src/app/services/member.service.ts");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");
    /* harmony import */


    var _dialogs_team_invite_dialog_invite_dialog_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./../../dialogs/team-invite-dialog/invite-dialog.component */
    "./src/app/main/dialogs/team-invite-dialog/invite-dialog.component.ts");

    let TeamComponent = class TeamComponent {
      constructor(membersService, dialog) {
        this.membersService = membersService;
        this.dialog = dialog;
        this.displayedColumns = ['name', 'email', 'role', 'action'];
      }

      ngOnInit() {
        this.membersService.getAllMembers();
        this.membersService.membersObservable.subscribe(members => {
          this.members = members;
        });
      }

      openInviteTeamDialog() {
        this.dialog.open(_dialogs_team_invite_dialog_invite_dialog_component__WEBPACK_IMPORTED_MODULE_4__["InviteDialogComponent"]);
      }

    };

    TeamComponent.ctorParameters = () => [{
      type: src_app_services_member_service__WEBPACK_IMPORTED_MODULE_2__["MemberService"]
    }, {
      type: _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"]
    }];

    TeamComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-team',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./team.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/main/components/team/team.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./team.component.css */
      "./src/app/main/components/team/team.component.css")).default]
    })], TeamComponent);
    /***/
  },

  /***/
  "./src/app/main/components/verify-user/verify-user.component.css":
  /*!***********************************************************************!*\
    !*** ./src/app/main/components/verify-user/verify-user.component.css ***!
    \***********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppMainComponentsVerifyUserVerifyUserComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".container\n{\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-pack: center;\n            justify-content: center;\n    -webkit-box-align: center;\n            align-items: center;\n    height: 90vh;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi9jb21wb25lbnRzL3ZlcmlmeS11c2VyL3ZlcmlmeS11c2VyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0lBRUksb0JBQWE7SUFBYixhQUFhO0lBQ2Isd0JBQXVCO1lBQXZCLHVCQUF1QjtJQUN2Qix5QkFBbUI7WUFBbkIsbUJBQW1CO0lBQ25CLFlBQVk7QUFDaEIiLCJmaWxlIjoic3JjL2FwcC9tYWluL2NvbXBvbmVudHMvdmVyaWZ5LXVzZXIvdmVyaWZ5LXVzZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXJcbntcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgaGVpZ2h0OiA5MHZoO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/main/components/verify-user/verify-user.component.ts":
  /*!**********************************************************************!*\
    !*** ./src/app/main/components/verify-user/verify-user.component.ts ***!
    \**********************************************************************/

  /*! exports provided: VerifyUserComponent */

  /***/
  function srcAppMainComponentsVerifyUserVerifyUserComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "VerifyUserComponent", function () {
      return VerifyUserComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/services/user.service */
    "./src/app/services/user.service.ts");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");

    let VerifyUserComponent = class VerifyUserComponent {
      constructor(router, route, userServ, snackBar) {
        this.router = router;
        this.route = route;
        this.userServ = userServ;
        this.snackBar = snackBar;
        this.loginInProcess = false;
      }

      ngOnInit() {
        let accessCode = this.route.snapshot.paramMap.get('id');
        this.verificationCode = accessCode;
      }

      verifyAccount(firstName, lastName) {
        this.loginInProcess = true;
        this.userServ.verifyUser(firstName, lastName, this.verificationCode).subscribe(response => {
          let status = response.status;
          this.loginInProcess = false;

          if (status === 409) {
            this.snackBar.open("Looks like This Account is already verified or doesn't exists", 'Okay');
          } else if (status === 201) {
            const snackBarRef = this.snackBar.open('Verification Successful', 'Login');
            snackBarRef.onAction().subscribe(_ => {
              this.router.navigate(['/login']);
            });
          }
        });
      }

    };

    VerifyUserComponent.ctorParameters = () => [{
      type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
    }, {
      type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
    }, {
      type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]
    }, {
      type: _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"]
    }];

    VerifyUserComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-verify-user',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./verify-user.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/main/components/verify-user/verify-user.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./verify-user.component.css */
      "./src/app/main/components/verify-user/verify-user.component.css")).default]
    })], VerifyUserComponent);
    /***/
  },

  /***/
  "./src/app/main/components/work-space-message-thread/work-space-message-thread-reply-card/work-space-message-thread-reply-card.component.css":
  /*!***************************************************************************************************************************************************!*\
    !*** ./src/app/main/components/work-space-message-thread/work-space-message-thread-reply-card/work-space-message-thread-reply-card.component.css ***!
    \***************************************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppMainComponentsWorkSpaceMessageThreadWorkSpaceMessageThreadReplyCardWorkSpaceMessageThreadReplyCardComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".reply-card {\n    display:-webkit-box;\n    display:flex; \n    -webkit-box-pack:start; \n            justify-content:flex-start; \n    margin:10px; \n    -webkit-box-orient: vertical; \n    -webkit-box-direction: normal; \n            flex-direction: column;\n    border-left: 2px solid #ff0000;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi9jb21wb25lbnRzL3dvcmstc3BhY2UtbWVzc2FnZS10aHJlYWQvd29yay1zcGFjZS1tZXNzYWdlLXRocmVhZC1yZXBseS1jYXJkL3dvcmstc3BhY2UtbWVzc2FnZS10aHJlYWQtcmVwbHktY2FyZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksbUJBQVk7SUFBWixZQUFZO0lBQ1osc0JBQTBCO1lBQTFCLDBCQUEwQjtJQUMxQixXQUFXO0lBQ1gsNEJBQXNCO0lBQXRCLDZCQUFzQjtZQUF0QixzQkFBc0I7SUFDdEIsOEJBQThCO0FBQ2xDIiwiZmlsZSI6InNyYy9hcHAvbWFpbi9jb21wb25lbnRzL3dvcmstc3BhY2UtbWVzc2FnZS10aHJlYWQvd29yay1zcGFjZS1tZXNzYWdlLXRocmVhZC1yZXBseS1jYXJkL3dvcmstc3BhY2UtbWVzc2FnZS10aHJlYWQtcmVwbHktY2FyZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnJlcGx5LWNhcmQge1xuICAgIGRpc3BsYXk6ZmxleDsgXG4gICAganVzdGlmeS1jb250ZW50OmZsZXgtc3RhcnQ7IFxuICAgIG1hcmdpbjoxMHB4OyBcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGJvcmRlci1sZWZ0OiAycHggc29saWQgI2ZmMDAwMDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/main/components/work-space-message-thread/work-space-message-thread-reply-card/work-space-message-thread-reply-card.component.ts":
  /*!**************************************************************************************************************************************************!*\
    !*** ./src/app/main/components/work-space-message-thread/work-space-message-thread-reply-card/work-space-message-thread-reply-card.component.ts ***!
    \**************************************************************************************************************************************************/

  /*! exports provided: WorkSpaceMessageThreadReplyCardComponent */

  /***/
  function srcAppMainComponentsWorkSpaceMessageThreadWorkSpaceMessageThreadReplyCardWorkSpaceMessageThreadReplyCardComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "WorkSpaceMessageThreadReplyCardComponent", function () {
      return WorkSpaceMessageThreadReplyCardComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_app_services_util_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/services/util.service */
    "./src/app/services/util.service.ts");

    let WorkSpaceMessageThreadReplyCardComponent = class WorkSpaceMessageThreadReplyCardComponent {
      constructor(utilService) {
        this.utilService = utilService;
      }

      ngOnInit() {
        const timeAgo = this.workspacePostReply.timestamp;
        const timeNow = new Date().getTime();
        this.timeLapse = this.utilService.timeDifference(timeNow, timeAgo);
      }

    };

    WorkSpaceMessageThreadReplyCardComponent.ctorParameters = () => [{
      type: src_app_services_util_service__WEBPACK_IMPORTED_MODULE_2__["UtilService"]
    }];

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])("workspacePostReply")], WorkSpaceMessageThreadReplyCardComponent.prototype, "workspacePostReply", void 0);
    WorkSpaceMessageThreadReplyCardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-work-space-message-thread-reply-card',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./work-space-message-thread-reply-card.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/main/components/work-space-message-thread/work-space-message-thread-reply-card/work-space-message-thread-reply-card.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./work-space-message-thread-reply-card.component.css */
      "./src/app/main/components/work-space-message-thread/work-space-message-thread-reply-card/work-space-message-thread-reply-card.component.css")).default]
    })], WorkSpaceMessageThreadReplyCardComponent);
    /***/
  },

  /***/
  "./src/app/main/components/work-space-message-thread/work-space-message-thread.component.css":
  /*!***************************************************************************************************!*\
    !*** ./src/app/main/components/work-space-message-thread/work-space-message-thread.component.css ***!
    \***************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppMainComponentsWorkSpaceMessageThreadWorkSpaceMessageThreadComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".tool-bar-row\n{\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-pack: justify;\n            justify-content: space-between;\n}\n\n/* Hide scrollbar for Chrome, Safari and Opera */\n\n.hide-scroll-bar::-webkit-scrollbar {\n    display: none;\n  }\n\n/* Hide scrollbar for IE, Edge and Firefox */\n\n.hide-scroll-bar {\n    -ms-overflow-style: none;\n    /* IE and Edge */\n    scrollbar-width: none;\n    /* Firefox */\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi9jb21wb25lbnRzL3dvcmstc3BhY2UtbWVzc2FnZS10aHJlYWQvd29yay1zcGFjZS1tZXNzYWdlLXRocmVhZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztJQUVJLG9CQUFhO0lBQWIsYUFBYTtJQUNiLHlCQUE4QjtZQUE5Qiw4QkFBOEI7QUFDbEM7O0FBRUEsZ0RBQWdEOztBQUNoRDtJQUNJLGFBQWE7RUFDZjs7QUFFQSw0Q0FBNEM7O0FBQzVDO0lBQ0Usd0JBQXdCO0lBQ3hCLGdCQUFnQjtJQUNoQixxQkFBcUI7SUFDckIsWUFBWTtFQUNkIiwiZmlsZSI6InNyYy9hcHAvbWFpbi9jb21wb25lbnRzL3dvcmstc3BhY2UtbWVzc2FnZS10aHJlYWQvd29yay1zcGFjZS1tZXNzYWdlLXRocmVhZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRvb2wtYmFyLXJvd1xue1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuXG4vKiBIaWRlIHNjcm9sbGJhciBmb3IgQ2hyb21lLCBTYWZhcmkgYW5kIE9wZXJhICovXG4uaGlkZS1zY3JvbGwtYmFyOjotd2Via2l0LXNjcm9sbGJhciB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuICBcbiAgLyogSGlkZSBzY3JvbGxiYXIgZm9yIElFLCBFZGdlIGFuZCBGaXJlZm94ICovXG4gIC5oaWRlLXNjcm9sbC1iYXIge1xuICAgIC1tcy1vdmVyZmxvdy1zdHlsZTogbm9uZTtcbiAgICAvKiBJRSBhbmQgRWRnZSAqL1xuICAgIHNjcm9sbGJhci13aWR0aDogbm9uZTtcbiAgICAvKiBGaXJlZm94ICovXG4gIH0iXX0= */";
    /***/
  },

  /***/
  "./src/app/main/components/work-space-message-thread/work-space-message-thread.component.ts":
  /*!**************************************************************************************************!*\
    !*** ./src/app/main/components/work-space-message-thread/work-space-message-thread.component.ts ***!
    \**************************************************************************************************/

  /*! exports provided: WorkSpaceMessageThreadComponent */

  /***/
  function srcAppMainComponentsWorkSpaceMessageThreadWorkSpaceMessageThreadComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "WorkSpaceMessageThreadComponent", function () {
      return WorkSpaceMessageThreadComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var src_app_services_work_space_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/services/work-space.service */
    "./src/app/services/work-space.service.ts");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");
    /* harmony import */


    var _dialogs_create_workspace_thread_dialog_create_workspace_thread_dialog_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../dialogs/create-workspace-thread-dialog/create-workspace-thread-dialog.component */
    "./src/app/main/dialogs/create-workspace-thread-dialog/create-workspace-thread-dialog.component.ts");

    let WorkSpaceMessageThreadComponent = class WorkSpaceMessageThreadComponent {
      constructor(activatedRoute, workspaceService, router, createReplyDialog) {
        this.activatedRoute = activatedRoute;
        this.workspaceService = workspaceService;
        this.router = router;
        this.createReplyDialog = createReplyDialog;
      }

      ngOnInit() {
        this.workspaceService.workspacePostRepliesObservable.subscribe(workspacePostReplies => {
          this.workspacePostReplies = workspacePostReplies;
        });
        this.workspaceID = parseInt(this.activatedRoute.snapshot.paramMap.get("workspaceID"));
        this.threadID = parseInt(this.activatedRoute.snapshot.paramMap.get("messageID"));
        this.loadWorkspaceMessage();
        this.loadWorkpaceReplies();
      }

      loadWorkspaceMessage() {
        this.workspaceService.getWorkspacePost(this.workspaceID, this.threadID).subscribe(workspacePost => {
          this.workspacePost = workspacePost;
          console.log(workspacePost);
        });
      }

      loadWorkpaceReplies() {
        this.workspaceService.getWorkspacePostReplies(this.workspaceID, this.threadID);
      }

      goBack() {
        this.router.navigate(["app/workspace/".concat(this.workspaceID)]);
      }

      openAddReplyToPostDialog() {
        this.createReplyDialog.open(_dialogs_create_workspace_thread_dialog_create_workspace_thread_dialog_component__WEBPACK_IMPORTED_MODULE_5__["CreateWorkspaceThreadDialogComponent"], {
          width: "400px",
          height: "280px",
          data: this.workspacePost
        });
      }

    };

    WorkSpaceMessageThreadComponent.ctorParameters = () => [{
      type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
    }, {
      type: src_app_services_work_space_service__WEBPACK_IMPORTED_MODULE_3__["WorkSpaceService"]
    }, {
      type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
    }, {
      type: _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialog"]
    }];

    WorkSpaceMessageThreadComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-work-space-message-thread',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./work-space-message-thread.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/main/components/work-space-message-thread/work-space-message-thread.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./work-space-message-thread.component.css */
      "./src/app/main/components/work-space-message-thread/work-space-message-thread.component.css")).default]
    })], WorkSpaceMessageThreadComponent);
    /***/
  },

  /***/
  "./src/app/main/components/work-space/message-card/message-card.component.css":
  /*!************************************************************************************!*\
    !*** ./src/app/main/components/work-space/message-card/message-card.component.css ***!
    \************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppMainComponentsWorkSpaceMessageCardMessageCardComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "mat-chip {\n  max-width: 200px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi9jb21wb25lbnRzL3dvcmstc3BhY2UvbWVzc2FnZS1jYXJkL21lc3NhZ2UtY2FyZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQWdCO0FBQ2xCIiwiZmlsZSI6InNyYy9hcHAvbWFpbi9jb21wb25lbnRzL3dvcmstc3BhY2UvbWVzc2FnZS1jYXJkL21lc3NhZ2UtY2FyZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsibWF0LWNoaXAge1xuICBtYXgtd2lkdGg6IDIwMHB4O1xufVxuIl19 */";
    /***/
  },

  /***/
  "./src/app/main/components/work-space/message-card/message-card.component.ts":
  /*!***********************************************************************************!*\
    !*** ./src/app/main/components/work-space/message-card/message-card.component.ts ***!
    \***********************************************************************************/

  /*! exports provided: MessageCardComponent */

  /***/
  function srcAppMainComponentsWorkSpaceMessageCardMessageCardComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MessageCardComponent", function () {
      return MessageCardComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_app_services_util_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/services/util.service */
    "./src/app/services/util.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    let MessageCardComponent = class MessageCardComponent {
      constructor(utilService, router) {
        this.utilService = utilService;
        this.router = router;
        this.availableColors = ['red'];
      }

      ngOnInit() {
        const postTime = parseInt(this.workspacePost.time);
        let postDate = new Date(postTime); // TODO : Work on getting time difference

        this.timeLapse = this.utilService.timeDifference(new Date().getTime(), postDate);
        console.log(this.timeLapse);
      }

      goToMessageThread() {
        const workspaceID = this.workspacePost.work_space_id;
        const threadID = this.workspacePost.work_space_msg_id;
        this.router.navigate(["app/workspace/".concat(workspaceID, "/message/").concat(threadID)]);
      }

      viewDetails(artID) {
        this.router.navigate(['/app/artifact/', artID]);
      }

    };

    MessageCardComponent.ctorParameters = () => [{
      type: src_app_services_util_service__WEBPACK_IMPORTED_MODULE_2__["UtilService"]
    }, {
      type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
    }];

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('workspacePost')], MessageCardComponent.prototype, "workspacePost", void 0);
    MessageCardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-message-card',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./message-card.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/main/components/work-space/message-card/message-card.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./message-card.component.css */
      "./src/app/main/components/work-space/message-card/message-card.component.css")).default]
    })], MessageCardComponent);
    /***/
  },

  /***/
  "./src/app/main/components/work-space/view-work-space/view-work-space.component.css":
  /*!******************************************************************************************!*\
    !*** ./src/app/main/components/work-space/view-work-space/view-work-space.component.css ***!
    \******************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppMainComponentsWorkSpaceViewWorkSpaceViewWorkSpaceComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".tool-bar-row\n{\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-pack: justify;\n            justify-content: space-between;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi9jb21wb25lbnRzL3dvcmstc3BhY2Uvdmlldy13b3JrLXNwYWNlL3ZpZXctd29yay1zcGFjZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztJQUVJLG9CQUFhO0lBQWIsYUFBYTtJQUNiLHlCQUE4QjtZQUE5Qiw4QkFBOEI7QUFDbEMiLCJmaWxlIjoic3JjL2FwcC9tYWluL2NvbXBvbmVudHMvd29yay1zcGFjZS92aWV3LXdvcmstc3BhY2Uvdmlldy13b3JrLXNwYWNlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudG9vbC1iYXItcm93XG57XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/main/components/work-space/view-work-space/view-work-space.component.ts":
  /*!*****************************************************************************************!*\
    !*** ./src/app/main/components/work-space/view-work-space/view-work-space.component.ts ***!
    \*****************************************************************************************/

  /*! exports provided: ViewWorkSpaceComponent */

  /***/
  function srcAppMainComponentsWorkSpaceViewWorkSpaceViewWorkSpaceComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ViewWorkSpaceComponent", function () {
      return ViewWorkSpaceComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var src_app_services_work_space_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/services/work-space.service */
    "./src/app/services/work-space.service.ts");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");
    /* harmony import */


    var _dialogs_create_message_dialog_create_message_dialog_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./../../../dialogs/create-message-dialog/create-message-dialog.component */
    "./src/app/main/dialogs/create-message-dialog/create-message-dialog.component.ts");

    let ViewWorkSpaceComponent = class ViewWorkSpaceComponent {
      constructor(router, activeRoute, workspaceService, dialog) {
        this.router = router;
        this.activeRoute = activeRoute;
        this.workspaceService = workspaceService;
        this.dialog = dialog;
        this.list = [1, 2, 3, 4, 5, 6, 7, 8, 3, 4, 5, 6, 7];
        this.workspace = null;
        this.workspacePosts = [];
      }

      ngOnInit() {
        this.workspaceID = parseInt(this.activeRoute.snapshot.paramMap.get('id'));
        this.loadWorkspaceInfo();
        this.workspaceService.workspacePostsObservable.subscribe(workspacePosts => {
          this.workspacePosts = workspacePosts;
        });
        this.loadPosts();
      }

      goBack() {
        this.router.navigate(['/app']);
      }

      loadWorkspaceInfo() {
        this.workspaceService.getWorkspaceInfo(this.workspaceID).subscribe(workspace => {
          this.workspace = workspace;
        });
      }

      openCreateMessageDialog() {
        const workspaceID = this.workspaceID;
        this.dialog.open(_dialogs_create_message_dialog_create_message_dialog_component__WEBPACK_IMPORTED_MODULE_5__["CreateMessageDialogComponent"], {
          width: "400px",
          data: {
            workspaceID
          }
        });
      }

      loadPosts() {
        this.workspaceService.getMessages(this.workspaceID);
      }

    };

    ViewWorkSpaceComponent.ctorParameters = () => [{
      type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
    }, {
      type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
    }, {
      type: src_app_services_work_space_service__WEBPACK_IMPORTED_MODULE_3__["WorkSpaceService"]
    }, {
      type: _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialog"]
    }];

    ViewWorkSpaceComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-view-work-space',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./view-work-space.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/main/components/work-space/view-work-space/view-work-space.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./view-work-space.component.css */
      "./src/app/main/components/work-space/view-work-space/view-work-space.component.css")).default]
    })], ViewWorkSpaceComponent);
    /***/
  },

  /***/
  "./src/app/main/components/work-space/work-space-info-panel/work-space-info-panel.component.css":
  /*!******************************************************************************************************!*\
    !*** ./src/app/main/components/work-space/work-space-info-panel/work-space-info-panel.component.css ***!
    \******************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppMainComponentsWorkSpaceWorkSpaceInfoPanelWorkSpaceInfoPanelComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21haW4vY29tcG9uZW50cy93b3JrLXNwYWNlL3dvcmstc3BhY2UtaW5mby1wYW5lbC93b3JrLXNwYWNlLWluZm8tcGFuZWwuY29tcG9uZW50LmNzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/main/components/work-space/work-space-info-panel/work-space-info-panel.component.ts":
  /*!*****************************************************************************************************!*\
    !*** ./src/app/main/components/work-space/work-space-info-panel/work-space-info-panel.component.ts ***!
    \*****************************************************************************************************/

  /*! exports provided: WorkSpaceInfoPanelComponent */

  /***/
  function srcAppMainComponentsWorkSpaceWorkSpaceInfoPanelWorkSpaceInfoPanelComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "WorkSpaceInfoPanelComponent", function () {
      return WorkSpaceInfoPanelComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_app_services_work_space_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/services/work-space.service */
    "./src/app/services/work-space.service.ts");
    /* harmony import */


    var _dialogs_add_artifact_dialog_add_artifact_dialog_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./../../../dialogs/add-artifact-dialog/add-artifact-dialog.component */
    "./src/app/main/dialogs/add-artifact-dialog/add-artifact-dialog.component.ts");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");
    /* harmony import */


    var _dialogs_work_space_add_member_dialog_work_space_add_member_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./../../../dialogs/work-space-add-member-dialog/work-space-add-member.component */
    "./src/app/main/dialogs/work-space-add-member-dialog/work-space-add-member.component.ts");

    let WorkSpaceInfoPanelComponent = class WorkSpaceInfoPanelComponent {
      constructor(workspaceService, dialog) {
        this.workspaceService = workspaceService;
        this.dialog = dialog;
      }

      ngOnInit() {
        this.loadArtifacts();
        this.loadMembers();
      }

      loadMembers() {
        this.workspaceService.getMembers(this.workspaceID).subscribe(observer => {
          this.workspaceMembers = observer;
        });
      }

      loadArtifacts() {
        this.workspaceService.getArtifacts(this.workspaceID);
        this.workspaceService.artifactsObservable.subscribe(artifacts => {
          this.artifacts = artifacts;
        });
      }

      openAddMemberDialog() {
        // Open dialog to add user
        this.dialog.open(_dialogs_work_space_add_member_dialog_work_space_add_member_component__WEBPACK_IMPORTED_MODULE_5__["WorkSpaceAddMemberComponent"], {
          width: "350px",
          data: {
            workspaceID: this.workspaceID
          }
        });
      }

      openAddArtifactsDialog() {
        this.dialog.open(_dialogs_add_artifact_dialog_add_artifact_dialog_component__WEBPACK_IMPORTED_MODULE_3__["AddArtifactDialogComponent"], {
          width: "350px",
          data: {
            workspaceID: this.workspaceID
          }
        });
      }

    };

    WorkSpaceInfoPanelComponent.ctorParameters = () => [{
      type: src_app_services_work_space_service__WEBPACK_IMPORTED_MODULE_2__["WorkSpaceService"]
    }, {
      type: _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialog"]
    }];

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], WorkSpaceInfoPanelComponent.prototype, "workspaceID", void 0);
    WorkSpaceInfoPanelComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-work-space-info-panel',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./work-space-info-panel.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/main/components/work-space/work-space-info-panel/work-space-info-panel.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./work-space-info-panel.component.css */
      "./src/app/main/components/work-space/work-space-info-panel/work-space-info-panel.component.css")).default]
    })], WorkSpaceInfoPanelComponent);
    /***/
  },

  /***/
  "./src/app/main/components/work-space/work-space.component.css":
  /*!*********************************************************************!*\
    !*** ./src/app/main/components/work-space/work-space.component.css ***!
    \*********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppMainComponentsWorkSpaceWorkSpaceComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".grid\n{\n    display: -webkit-box;\n    display: flex;\n    padding-bottom: 9px;\n    padding-left: 9px;\n    padding-right: 9px;\n    -webkit-box-pack: center;\n            justify-content: center;\n    flex-wrap: wrap;\n}\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi9jb21wb25lbnRzL3dvcmstc3BhY2Uvd29yay1zcGFjZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztJQUVJLG9CQUFhO0lBQWIsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLHdCQUF1QjtZQUF2Qix1QkFBdUI7SUFDdkIsZUFBZTtBQUNuQiIsImZpbGUiOiJzcmMvYXBwL21haW4vY29tcG9uZW50cy93b3JrLXNwYWNlL3dvcmstc3BhY2UuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ncmlkXG57XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBwYWRkaW5nLWJvdHRvbTogOXB4O1xuICAgIHBhZGRpbmctbGVmdDogOXB4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDlweDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG59XG5cbiJdfQ== */";
    /***/
  },

  /***/
  "./src/app/main/components/work-space/work-space.component.ts":
  /*!********************************************************************!*\
    !*** ./src/app/main/components/work-space/work-space.component.ts ***!
    \********************************************************************/

  /*! exports provided: WorkSpaceComponent */

  /***/
  function srcAppMainComponentsWorkSpaceWorkSpaceComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "WorkSpaceComponent", function () {
      return WorkSpaceComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_app_services_work_space_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/services/work-space.service */
    "./src/app/services/work-space.service.ts");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");
    /* harmony import */


    var _dialogs_create_work_space_dialog_create_work_space_dialog_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./../../dialogs/create-work-space-dialog/create-work-space-dialog.component */
    "./src/app/main/dialogs/create-work-space-dialog/create-work-space-dialog.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    let WorkSpaceComponent = class WorkSpaceComponent {
      constructor(workSpaceService, createWSDialog, router) {
        this.workSpaceService = workSpaceService;
        this.createWSDialog = createWSDialog;
        this.router = router;
      }

      ngOnInit() {
        this.loadWorkSpaces();
        this.workSpaceService.workspacesObservable.subscribe(workSpaces => {
          this.workSpaces = workSpaces;
        });
      }

      loadWorkSpaces() {
        this.workSpaceService.getWorkSpaces();
      }

      openCreateWorkSpaceDialog() {
        this.createWSDialog.open(_dialogs_create_work_space_dialog_create_work_space_dialog_component__WEBPACK_IMPORTED_MODULE_4__["CreateWorkSpaceDialogComponent"]);
      }

      openWorkSpace(workSpace) {
        let workSpaceID = workSpace.work_space_id;
        this.router.navigate(['/app/workspace/', workSpaceID]);
      }

      nameSearch(event) {
        const key = event.target['value'];
        this.workSpaceService.nameSearch(key);
      }

    };

    WorkSpaceComponent.ctorParameters = () => [{
      type: src_app_services_work_space_service__WEBPACK_IMPORTED_MODULE_2__["WorkSpaceService"]
    }, {
      type: _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"]
    }, {
      type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
    }];

    WorkSpaceComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-work-space',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./work-space.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/main/components/work-space/work-space.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./work-space.component.css */
      "./src/app/main/components/work-space/work-space.component.css")).default]
    })], WorkSpaceComponent);
    /***/
  },

  /***/
  "./src/app/main/dialogs/add-artifact-dialog/add-artifact-dialog.component.css":
  /*!************************************************************************************!*\
    !*** ./src/app/main/dialogs/add-artifact-dialog/add-artifact-dialog.component.css ***!
    \************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppMainDialogsAddArtifactDialogAddArtifactDialogComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".form\n{\n    min-width: 150px;\n    max-width: 500px;\n    width: 100%;\n}\n\n.fields\n{\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi9kaWFsb2dzL2FkZC1hcnRpZmFjdC1kaWFsb2cvYWRkLWFydGlmYWN0LWRpYWxvZy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztJQUVJLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsV0FBVztBQUNmOztBQUVBOztFQUVFLFdBQVc7QUFDYiIsImZpbGUiOiJzcmMvYXBwL21haW4vZGlhbG9ncy9hZGQtYXJ0aWZhY3QtZGlhbG9nL2FkZC1hcnRpZmFjdC1kaWFsb2cuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mb3JtXG57XG4gICAgbWluLXdpZHRoOiAxNTBweDtcbiAgICBtYXgtd2lkdGg6IDUwMHB4O1xuICAgIHdpZHRoOiAxMDAlO1xufVxuXG4uZmllbGRzXG57XG4gIHdpZHRoOiAxMDAlO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/main/dialogs/add-artifact-dialog/add-artifact-dialog.component.ts":
  /*!***********************************************************************************!*\
    !*** ./src/app/main/dialogs/add-artifact-dialog/add-artifact-dialog.component.ts ***!
    \***********************************************************************************/

  /*! exports provided: AddArtifactDialogComponent */

  /***/
  function srcAppMainDialogsAddArtifactDialogAddArtifactDialogComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AddArtifactDialogComponent", function () {
      return AddArtifactDialogComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");
    /* harmony import */


    var src_app_services_work_space_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/services/work-space.service */
    "./src/app/services/work-space.service.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");

    let AddArtifactDialogComponent = class AddArtifactDialogComponent {
      constructor(workspaceService, dialogData, snackBar, dialogRef) {
        this.workspaceService = workspaceService;
        this.dialogData = dialogData;
        this.snackBar = snackBar;
        this.dialogRef = dialogRef;
        this.artifacts = [];
        this.myControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]();
      } // TODO : Work on fixing this error [formControl]="myControl"


      ngOnInit() {
        this.initArtifacts();
        this.filteredOptions = this.myControl.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["startWith"])(''), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(value => this._filter(value))); // TODO : Remove this if needed

        this.filteredOptions.subscribe(observer => {});
      }

      _filter(value) {
        console.log(value);
        const filterValue = value.toLowerCase();
        return this.artifacts.filter(option => option.name.toLowerCase().indexOf(filterValue) === 0);
      } // TODO Refractor these too methods


      search(event) {
        const artifactName = event.target['value'];
        this.workspaceService.artifactsSuggestion(artifactName, this.dialogData.workspaceID).subscribe(observable => {
          console.log(observable);
          this.artifacts = observable;
        });
      }

      initArtifacts() {
        const artifactName = "";
        this.workspaceService.artifactsSuggestion(artifactName, this.dialogData.workspaceID).subscribe(observable => {
          console.log(observable);
          this.artifacts = observable;
        });
      }

      addArtifactToWorkSpace(artifactName) {
        if (artifactName.length === 0) {
          this.snackBar.open("The Name of The Artifact Must Be Provided", "Okay");
        }

        this.workspaceService.addArtifact(this.dialogData.workspaceID, artifactName).subscribe(response => {
          if (response.status === 200) {
            this.workspaceService.getArtifacts(this.dialogData.workspaceID);
            this.snackBar.open("Artifact Was Added Successfully", "Okay").onAction().subscribe(() => {
              this.dialogRef.close();
            });
          }
        }, err => {
          const status = err.status;

          if (status === 409) {
            this.snackBar.open("It Seems This Artifact Already Exists in This Workspace", "Okay");
          } else if (status === 422) this.snackBar.open("Error, It Seems That Invalid Data Was Passed", "Okay");
        });
      }

      closeDialog() {
        this.dialogRef.close();
      }

    };

    AddArtifactDialogComponent.ctorParameters = () => [{
      type: src_app_services_work_space_service__WEBPACK_IMPORTED_MODULE_3__["WorkSpaceService"]
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
        args: [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]]
      }]
    }, {
      type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"]
    }, {
      type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"]
    }];

    AddArtifactDialogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-add-artifact-dialog',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./add-artifact-dialog.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/main/dialogs/add-artifact-dialog/add-artifact-dialog.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./add-artifact-dialog.component.css */
      "./src/app/main/dialogs/add-artifact-dialog/add-artifact-dialog.component.css")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]))], AddArtifactDialogComponent);
    /***/
  },

  /***/
  "./src/app/main/dialogs/chat-contacts-dialog/chat-contacts-dialog.component.css":
  /*!**************************************************************************************!*\
    !*** ./src/app/main/dialogs/chat-contacts-dialog/chat-contacts-dialog.component.css ***!
    \**************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppMainDialogsChatContactsDialogChatContactsDialogComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".list-sub-item {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n}\n\ntable {\n  width: 100%;\n}\n\n.text-input {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-pack: center;\n          justify-content: center;\n}\n\n.chat-dialog {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n  height: 100%;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi9kaWFsb2dzL2NoYXQtY29udGFjdHMtZGlhbG9nL2NoYXQtY29udGFjdHMtZGlhbG9nLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxvQkFBYTtFQUFiLGFBQWE7RUFDYix5QkFBOEI7VUFBOUIsOEJBQThCO0FBQ2hDOztBQUVBO0VBQ0UsV0FBVztBQUNiOztBQUVBO0VBQ0Usb0JBQWE7RUFBYixhQUFhO0VBQ2Isd0JBQXVCO1VBQXZCLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLG9CQUFhO0VBQWIsYUFBYTtFQUNiLDRCQUFzQjtFQUF0Qiw2QkFBc0I7VUFBdEIsc0JBQXNCO0VBQ3RCLHlCQUE4QjtVQUE5Qiw4QkFBOEI7RUFDOUIsWUFBWTtBQUNkIiwiZmlsZSI6InNyYy9hcHAvbWFpbi9kaWFsb2dzL2NoYXQtY29udGFjdHMtZGlhbG9nL2NoYXQtY29udGFjdHMtZGlhbG9nLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubGlzdC1zdWItaXRlbSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cblxudGFibGUge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLnRleHQtaW5wdXQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLmNoYXQtZGlhbG9nIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBoZWlnaHQ6IDEwMCU7XG59XG4iXX0= */";
    /***/
  },

  /***/
  "./src/app/main/dialogs/chat-contacts-dialog/chat-contacts-dialog.component.ts":
  /*!*************************************************************************************!*\
    !*** ./src/app/main/dialogs/chat-contacts-dialog/chat-contacts-dialog.component.ts ***!
    \*************************************************************************************/

  /*! exports provided: ChatContactsDialogComponent */

  /***/
  function srcAppMainDialogsChatContactsDialogChatContactsDialogComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ChatContactsDialogComponent", function () {
      return ChatContactsDialogComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_app_services_member_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/services/member.service */
    "./src/app/services/member.service.ts");
    /* harmony import */


    var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/paginator */
    "./node_modules/@angular/material/esm2015/paginator.js");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");
    /* harmony import */


    var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/services/user.service */
    "./src/app/services/user.service.ts");
    /* harmony import */


    var src_app_services_chat_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/services/chat.service */
    "./src/app/services/chat.service.ts");

    let ChatContactsDialogComponent = class ChatContactsDialogComponent {
      constructor(membersService, userService, chatService) {
        this.membersService = membersService;
        this.userService = userService;
        this.chatService = chatService;
        this.isContactSelected = false;
        this.displayedColumns = ['name', 'email', 'action'];
      }

      ngOnInit() {
        this.userService.getUserInfo().subscribe(user => {
          this.user = user;
        });
        this.membersService.getAllMembers();
        this.membersService.membersObservable.subscribe(members => {
          this.members = members;
        });
        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"](this.members); // Set Data Source
      }

      ngAfterViewInit() {
        this.dataSource.paginator = this.paginator;
      }

      selectContact(member) {
        this.isContactSelected = true;
        this.selectedContact = member;
      }

      sendMessage(messageContent) {
        const recieverID = this.selectedContact.user_id;
        const senderID = this.user.user_id;
        const timestamp = new Date().getTime();
        this.chatService.createChatAndChatRoom(senderID, recieverID, messageContent, timestamp).subscribe(response => {
          if (response.status === 200) {
            this.chatService.getActiveChats();
          }
        });
      }

    };

    ChatContactsDialogComponent.ctorParameters = () => [{
      type: src_app_services_member_service__WEBPACK_IMPORTED_MODULE_2__["MemberService"]
    }, {
      type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"]
    }, {
      type: src_app_services_chat_service__WEBPACK_IMPORTED_MODULE_6__["ChatService"]
    }];

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material_paginator__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"], null)], ChatContactsDialogComponent.prototype, "paginator", void 0);
    ChatContactsDialogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-chat-contacts-dialog',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./chat-contacts-dialog.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/main/dialogs/chat-contacts-dialog/chat-contacts-dialog.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./chat-contacts-dialog.component.css */
      "./src/app/main/dialogs/chat-contacts-dialog/chat-contacts-dialog.component.css")).default]
    })], ChatContactsDialogComponent);
    /***/
  },

  /***/
  "./src/app/main/dialogs/create-artifact-dialog/create-dialog.component.css":
  /*!*********************************************************************************!*\
    !*** ./src/app/main/dialogs/create-artifact-dialog/create-dialog.component.css ***!
    \*********************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppMainDialogsCreateArtifactDialogCreateDialogComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".form\n{\n    min-width: 150px;\n    max-width: 500px;\n    width: 100%;\n}\n\n.fields\n{\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi9kaWFsb2dzL2NyZWF0ZS1hcnRpZmFjdC1kaWFsb2cvY3JlYXRlLWRpYWxvZy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztJQUVJLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsV0FBVztBQUNmOztBQUVBOztFQUVFLFdBQVc7QUFDYiIsImZpbGUiOiJzcmMvYXBwL21haW4vZGlhbG9ncy9jcmVhdGUtYXJ0aWZhY3QtZGlhbG9nL2NyZWF0ZS1kaWFsb2cuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mb3JtXG57XG4gICAgbWluLXdpZHRoOiAxNTBweDtcbiAgICBtYXgtd2lkdGg6IDUwMHB4O1xuICAgIHdpZHRoOiAxMDAlO1xufVxuXG4uZmllbGRzXG57XG4gIHdpZHRoOiAxMDAlO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/main/dialogs/create-artifact-dialog/create-dialog.component.ts":
  /*!********************************************************************************!*\
    !*** ./src/app/main/dialogs/create-artifact-dialog/create-dialog.component.ts ***!
    \********************************************************************************/

  /*! exports provided: CreateDialogComponent */

  /***/
  function srcAppMainDialogsCreateArtifactDialogCreateDialogComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CreateDialogComponent", function () {
      return CreateDialogComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");
    /* harmony import */


    var src_app_services_artifacts_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/services/artifacts.service */
    "./src/app/services/artifacts.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var src_app_services_util_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/services/util.service */
    "./src/app/services/util.service.ts");

    let CreateDialogComponent = class CreateDialogComponent {
      constructor(dialogRef, data, snackBar, artServ, router, utilServ) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.snackBar = snackBar;
        this.artServ = artServ;
        this.router = router;
        this.utilServ = utilServ;
      }

      closeDialog() {
        this.dialogRef.close();
      }

      ngOnInit() {}

      createArtifact(name, description) {
        if (name === '' || description === '') {
          this.snackBar.open('None of the fields should be empty', "Okay");
          return;
        }

        let currentDate = this.utilServ.getCurrentDate();
        this.artServ.createArtifact(name, description, currentDate).subscribe(data => {
          let artID = data.art_id;
          let message = data['message'];

          if (message === 'ok') {
            let snackBarRef = this.snackBar.open('Created successfully', 'Okay');
            snackBarRef.afterDismissed().subscribe(data => {
              this.closeDialog();
              this.router.navigate(['/app/artifact/', artID]);
            });
            this.artServ.getAllArtifacts();
          } else this.snackBar.open('Looks like there is an internal error', 'Okay');
        });
      }

    };

    CreateDialogComponent.ctorParameters = () => [{
      type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"]
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
        args: [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]]
      }]
    }, {
      type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"]
    }, {
      type: src_app_services_artifacts_service__WEBPACK_IMPORTED_MODULE_3__["ArtifactsService"]
    }, {
      type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
    }, {
      type: src_app_services_util_service__WEBPACK_IMPORTED_MODULE_5__["UtilService"]
    }];

    CreateDialogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-create-dialog',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./create-dialog.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/main/dialogs/create-artifact-dialog/create-dialog.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./create-dialog.component.css */
      "./src/app/main/dialogs/create-artifact-dialog/create-dialog.component.css")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]))], CreateDialogComponent);
    /***/
  },

  /***/
  "./src/app/main/dialogs/create-message-dialog/create-message-dialog.component.css":
  /*!****************************************************************************************!*\
    !*** ./src/app/main/dialogs/create-message-dialog/create-message-dialog.component.css ***!
    \****************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppMainDialogsCreateMessageDialogCreateMessageDialogComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".form\n{\n    min-width: 200px;\n    max-width: 600px;\n    width: 100%;\n}\n\n.fields\n{\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi9kaWFsb2dzL2NyZWF0ZS1tZXNzYWdlLWRpYWxvZy9jcmVhdGUtbWVzc2FnZS1kaWFsb2cuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7SUFFSSxnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLFdBQVc7QUFDZjs7QUFFQTs7RUFFRSxXQUFXO0FBQ2IiLCJmaWxlIjoic3JjL2FwcC9tYWluL2RpYWxvZ3MvY3JlYXRlLW1lc3NhZ2UtZGlhbG9nL2NyZWF0ZS1tZXNzYWdlLWRpYWxvZy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZvcm1cbntcbiAgICBtaW4td2lkdGg6IDIwMHB4O1xuICAgIG1heC13aWR0aDogNjAwcHg7XG4gICAgd2lkdGg6IDEwMCU7XG59XG5cbi5maWVsZHNcbntcbiAgd2lkdGg6IDEwMCU7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/main/dialogs/create-message-dialog/create-message-dialog.component.ts":
  /*!***************************************************************************************!*\
    !*** ./src/app/main/dialogs/create-message-dialog/create-message-dialog.component.ts ***!
    \***************************************************************************************/

  /*! exports provided: CreateMessageDialogComponent */

  /***/
  function srcAppMainDialogsCreateMessageDialogCreateMessageDialogComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CreateMessageDialogComponent", function () {
      return CreateMessageDialogComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");
    /* harmony import */


    var src_app_services_util_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/services/util.service */
    "./src/app/services/util.service.ts");
    /* harmony import */


    var src_app_services_work_space_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/services/work-space.service */
    "./src/app/services/work-space.service.ts");

    let CreateMessageDialogComponent = class CreateMessageDialogComponent {
      constructor(dialogRef, utilService, dialogData, workspaceService) {
        this.dialogRef = dialogRef;
        this.utilService = utilService;
        this.dialogData = dialogData;
        this.workspaceService = workspaceService;
        this.artifactName = "";
      }

      ngOnInit() {
        this.workspaceService.getArtifacts(this.dialogData.workspaceID);
        this.workspaceService.artifactsObservable.subscribe(artifacts => {
          this.artifacts = artifacts;
        });
      }

      ngAfterViewInit() {}

      postMessage(title, content) {
        const date = this.utilService.getCurrentDate();
        const workspaceID = this.dialogData.workspaceID;
        const time = new Date().getTime();
        this.workspaceService.postMessage(workspaceID, title, content, time, date, this.artifactName).subscribe(response => {
          if (response.status === 201) this.workspaceService.getMessages(workspaceID);
          this.dialogRef.close();
        });
      }

      closeDialog() {
        this.dialogRef.close();
      }

      onArtifactSelected(event) {
        this.artifactName = event.source.selected.viewValue;
      }

      runTest(selectedArtifacts) {
        console.log(selectedArtifacts.selectedOptions.selected[0]);
      }

    };

    CreateMessageDialogComponent.ctorParameters = () => [{
      type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"]
    }, {
      type: src_app_services_util_service__WEBPACK_IMPORTED_MODULE_3__["UtilService"]
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
        args: [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]]
      }]
    }, {
      type: src_app_services_work_space_service__WEBPACK_IMPORTED_MODULE_4__["WorkSpaceService"]
    }];

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("selectedArtifacts", {
      static: true
    })], CreateMessageDialogComponent.prototype, "selectedArtifacts", void 0);
    CreateMessageDialogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-create-message-dialog',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./create-message-dialog.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/main/dialogs/create-message-dialog/create-message-dialog.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./create-message-dialog.component.css */
      "./src/app/main/dialogs/create-message-dialog/create-message-dialog.component.css")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]))], CreateMessageDialogComponent);
    /***/
  },

  /***/
  "./src/app/main/dialogs/create-work-space-dialog/create-work-space-dialog.component.css":
  /*!**********************************************************************************************!*\
    !*** ./src/app/main/dialogs/create-work-space-dialog/create-work-space-dialog.component.css ***!
    \**********************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppMainDialogsCreateWorkSpaceDialogCreateWorkSpaceDialogComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".form\n{\n    min-width: 150px;\n    max-width: 500px;\n    width: 100%;\n}\n\n.fields\n{\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi9kaWFsb2dzL2NyZWF0ZS13b3JrLXNwYWNlLWRpYWxvZy9jcmVhdGUtd29yay1zcGFjZS1kaWFsb2cuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7SUFFSSxnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLFdBQVc7QUFDZjs7QUFFQTs7RUFFRSxXQUFXO0FBQ2IiLCJmaWxlIjoic3JjL2FwcC9tYWluL2RpYWxvZ3MvY3JlYXRlLXdvcmstc3BhY2UtZGlhbG9nL2NyZWF0ZS13b3JrLXNwYWNlLWRpYWxvZy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZvcm1cbntcbiAgICBtaW4td2lkdGg6IDE1MHB4O1xuICAgIG1heC13aWR0aDogNTAwcHg7XG4gICAgd2lkdGg6IDEwMCU7XG59XG5cbi5maWVsZHNcbntcbiAgd2lkdGg6IDEwMCU7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/main/dialogs/create-work-space-dialog/create-work-space-dialog.component.ts":
  /*!*********************************************************************************************!*\
    !*** ./src/app/main/dialogs/create-work-space-dialog/create-work-space-dialog.component.ts ***!
    \*********************************************************************************************/

  /*! exports provided: CreateWorkSpaceDialogComponent */

  /***/
  function srcAppMainDialogsCreateWorkSpaceDialogCreateWorkSpaceDialogComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CreateWorkSpaceDialogComponent", function () {
      return CreateWorkSpaceDialogComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_app_services_work_space_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/services/work-space.service */
    "./src/app/services/work-space.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");
    /* harmony import */


    var src_app_services_util_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/services/util.service */
    "./src/app/services/util.service.ts");

    let CreateWorkSpaceDialogComponent = class CreateWorkSpaceDialogComponent {
      constructor(workspaceService, router, snackBar, utilService, dialogRef) {
        this.workspaceService = workspaceService;
        this.router = router;
        this.snackBar = snackBar;
        this.utilService = utilService;
        this.dialogRef = dialogRef;
      }

      ngOnInit() {}

      createWorkSpace(name) {
        let currentDate = this.utilService.getCurrentDate();
        this.workspaceService.createWorkSpace(name, currentDate).subscribe(observable => {
          let message = observable['message'];

          if (message === 'ok') {
            let workspaceID = observable['work_space_id'];
            this.closeDialog();
            this.router.navigate(["/app/workspace/", workspaceID]);
            this.workspaceService.getWorkSpaces();
          } else {
            // show error
            this.snackBar.open("Looks like something went wrong", "Ok");
          }
        });
      }

      closeDialog() {
        this.dialogRef.close();
      }

    };

    CreateWorkSpaceDialogComponent.ctorParameters = () => [{
      type: src_app_services_work_space_service__WEBPACK_IMPORTED_MODULE_2__["WorkSpaceService"]
    }, {
      type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
    }, {
      type: _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"]
    }, {
      type: src_app_services_util_service__WEBPACK_IMPORTED_MODULE_5__["UtilService"]
    }, {
      type: _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialogRef"]
    }];

    CreateWorkSpaceDialogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-create-work-space-dialog',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./create-work-space-dialog.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/main/dialogs/create-work-space-dialog/create-work-space-dialog.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./create-work-space-dialog.component.css */
      "./src/app/main/dialogs/create-work-space-dialog/create-work-space-dialog.component.css")).default]
    })], CreateWorkSpaceDialogComponent);
    /***/
  },

  /***/
  "./src/app/main/dialogs/create-workspace-thread-dialog/create-workspace-thread-dialog.component.css":
  /*!**********************************************************************************************************!*\
    !*** ./src/app/main/dialogs/create-workspace-thread-dialog/create-workspace-thread-dialog.component.css ***!
    \**********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppMainDialogsCreateWorkspaceThreadDialogCreateWorkspaceThreadDialogComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".form\n{\n    min-width: 200px;\n    max-width: 600px;\n    width: 100%;\n}\n\n.fields\n{\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi9kaWFsb2dzL2NyZWF0ZS13b3Jrc3BhY2UtdGhyZWFkLWRpYWxvZy9jcmVhdGUtd29ya3NwYWNlLXRocmVhZC1kaWFsb2cuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7SUFFSSxnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLFdBQVc7QUFDZjs7QUFFQTs7RUFFRSxXQUFXO0FBQ2IiLCJmaWxlIjoic3JjL2FwcC9tYWluL2RpYWxvZ3MvY3JlYXRlLXdvcmtzcGFjZS10aHJlYWQtZGlhbG9nL2NyZWF0ZS13b3Jrc3BhY2UtdGhyZWFkLWRpYWxvZy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZvcm1cbntcbiAgICBtaW4td2lkdGg6IDIwMHB4O1xuICAgIG1heC13aWR0aDogNjAwcHg7XG4gICAgd2lkdGg6IDEwMCU7XG59XG5cbi5maWVsZHNcbntcbiAgd2lkdGg6IDEwMCU7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/main/dialogs/create-workspace-thread-dialog/create-workspace-thread-dialog.component.ts":
  /*!*********************************************************************************************************!*\
    !*** ./src/app/main/dialogs/create-workspace-thread-dialog/create-workspace-thread-dialog.component.ts ***!
    \*********************************************************************************************************/

  /*! exports provided: CreateWorkspaceThreadDialogComponent */

  /***/
  function srcAppMainDialogsCreateWorkspaceThreadDialogCreateWorkspaceThreadDialogComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CreateWorkspaceThreadDialogComponent", function () {
      return CreateWorkspaceThreadDialogComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");
    /* harmony import */


    var src_app_services_work_space_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/services/work-space.service */
    "./src/app/services/work-space.service.ts");

    let CreateWorkspaceThreadDialogComponent = class CreateWorkspaceThreadDialogComponent {
      constructor(workspacePost, workspaceService, snackBar, dialogRef) {
        this.workspacePost = workspacePost;
        this.workspaceService = workspaceService;
        this.snackBar = snackBar;
        this.dialogRef = dialogRef;
      }

      ngOnInit() {}

      postMessageThread(content) {
        const timeStamp = new Date().getTime();
        this.workspaceService.postWorkspacePostReply(this.workspacePost.work_space_id, this.workspacePost.work_space_msg_id, content, "NONE", timeStamp).subscribe(response => {
          if (response.status === 201) {
            this.workspaceService.getWorkspacePostReplies(this.workspacePost.work_space_id, this.workspacePost.work_space_msg_id);
            this.closeDialog();
          }
        });
      }

      closeDialog() {
        this.dialogRef.close();
      }

    };

    CreateWorkspaceThreadDialogComponent.ctorParameters = () => [{
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
        args: [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]]
      }]
    }, {
      type: src_app_services_work_space_service__WEBPACK_IMPORTED_MODULE_3__["WorkSpaceService"]
    }, {
      type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"]
    }, {
      type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"]
    }];

    CreateWorkspaceThreadDialogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-create-workspace-thread-dialog',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./create-workspace-thread-dialog.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/main/dialogs/create-workspace-thread-dialog/create-workspace-thread-dialog.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./create-workspace-thread-dialog.component.css */
      "./src/app/main/dialogs/create-workspace-thread-dialog/create-workspace-thread-dialog.component.css")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]))], CreateWorkspaceThreadDialogComponent);
    /***/
  },

  /***/
  "./src/app/main/dialogs/delete-artifact-dialog/delete-artifact-dialog.component.css":
  /*!******************************************************************************************!*\
    !*** ./src/app/main/dialogs/delete-artifact-dialog/delete-artifact-dialog.component.css ***!
    \******************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppMainDialogsDeleteArtifactDialogDeleteArtifactDialogComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".form\n{\n    min-width: 150px;\n    max-width: 500px;\n    width: 100%;\n}\n\n.fields\n{\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi9kaWFsb2dzL2RlbGV0ZS1hcnRpZmFjdC1kaWFsb2cvZGVsZXRlLWFydGlmYWN0LWRpYWxvZy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztJQUVJLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsV0FBVztBQUNmOztBQUVBOztFQUVFLFdBQVc7QUFDYiIsImZpbGUiOiJzcmMvYXBwL21haW4vZGlhbG9ncy9kZWxldGUtYXJ0aWZhY3QtZGlhbG9nL2RlbGV0ZS1hcnRpZmFjdC1kaWFsb2cuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mb3JtXG57XG4gICAgbWluLXdpZHRoOiAxNTBweDtcbiAgICBtYXgtd2lkdGg6IDUwMHB4O1xuICAgIHdpZHRoOiAxMDAlO1xufVxuXG4uZmllbGRzXG57XG4gIHdpZHRoOiAxMDAlO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/main/dialogs/delete-artifact-dialog/delete-artifact-dialog.component.ts":
  /*!*****************************************************************************************!*\
    !*** ./src/app/main/dialogs/delete-artifact-dialog/delete-artifact-dialog.component.ts ***!
    \*****************************************************************************************/

  /*! exports provided: DeleteArtifactDialogComponent */

  /***/
  function srcAppMainDialogsDeleteArtifactDialogDeleteArtifactDialogComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DeleteArtifactDialogComponent", function () {
      return DeleteArtifactDialogComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");
    /* harmony import */


    var src_app_services_artifacts_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/services/artifacts.service */
    "./src/app/services/artifacts.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    let DeleteArtifactDialogComponent = class DeleteArtifactDialogComponent {
      constructor(dialogRef, artServ, router, snackBar, dialogData) {
        this.dialogRef = dialogRef;
        this.artServ = artServ;
        this.router = router;
        this.snackBar = snackBar;
        this.dialogData = dialogData;
        this.isNameCorrect = false;
      }

      ngOnInit() {
        this.artifactName = this.dialogData.artifact_name;
        this.artID = this.dialogData.art_id;
      }

      onType(artifactName) {
        if (this.artifactName === artifactName) this.isNameCorrect = true;else this.isNameCorrect = false;
      }

      deleteArtifact() {
        this.artServ.deleteArtifact(this.artID).subscribe(observable => {
          const message = observable['message'];

          if (message === 'done') {
            const snackBarRef = this.snackBar.open("The Artifact '".concat(this.artifactName, "' was deleted"), 'Okay');
            snackBarRef.afterDismissed().subscribe(_ => {
              this.dialogRef.close();
              this.router.navigate(['/app']);
            });
          } else {
            this.snackBar.open('Looks like something went wrong');
          }
        });
      }

      closeDialog() {
        this.dialogRef.close();
      }

    };

    DeleteArtifactDialogComponent.ctorParameters = () => [{
      type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"]
    }, {
      type: src_app_services_artifacts_service__WEBPACK_IMPORTED_MODULE_3__["ArtifactsService"]
    }, {
      type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
    }, {
      type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"]
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
        args: [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]]
      }]
    }];

    DeleteArtifactDialogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-delete-artifact-dialog',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./delete-artifact-dialog.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/main/dialogs/delete-artifact-dialog/delete-artifact-dialog.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./delete-artifact-dialog.component.css */
      "./src/app/main/dialogs/delete-artifact-dialog/delete-artifact-dialog.component.css")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](4, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]))], DeleteArtifactDialogComponent);
    /***/
  },

  /***/
  "./src/app/main/dialogs/team-invite-dialog/invite-dialog.component.css":
  /*!*****************************************************************************!*\
    !*** ./src/app/main/dialogs/team-invite-dialog/invite-dialog.component.css ***!
    \*****************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppMainDialogsTeamInviteDialogInviteDialogComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21haW4vZGlhbG9ncy90ZWFtLWludml0ZS1kaWFsb2cvaW52aXRlLWRpYWxvZy5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/main/dialogs/team-invite-dialog/invite-dialog.component.ts":
  /*!****************************************************************************!*\
    !*** ./src/app/main/dialogs/team-invite-dialog/invite-dialog.component.ts ***!
    \****************************************************************************/

  /*! exports provided: InviteDialogComponent */

  /***/
  function srcAppMainDialogsTeamInviteDialogInviteDialogComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "InviteDialogComponent", function () {
      return InviteDialogComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_app_services_member_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/services/member.service */
    "./src/app/services/member.service.ts");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/esm2015/dialog.js");

    let InviteDialogComponent = class InviteDialogComponent {
      constructor(dialogRef, memServ) {
        this.dialogRef = dialogRef;
        this.memServ = memServ;
      }

      ngOnInit() {
        this.getInviteURL();
      }

      getInviteURL() {
        this.memServ.getInviteURL().subscribe(observable => {
          this.inviteUrl = observable['invite_url'];
        });
      } // TODO Work on cpy clipboard solution


      closeDialog() {
        this.dialogRef.close();
      }

      copyLinkToClipBoard(inputElement) {
        inputElement.select();
        document.execCommand('copy');
        inputElement.setSelectionRange(0, 0);
      }

    };

    InviteDialogComponent.ctorParameters = () => [{
      type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"]
    }, {
      type: src_app_services_member_service__WEBPACK_IMPORTED_MODULE_2__["MemberService"]
    }];

    InviteDialogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-invite-dialog',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./invite-dialog.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/main/dialogs/team-invite-dialog/invite-dialog.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./invite-dialog.component.css */
      "./src/app/main/dialogs/team-invite-dialog/invite-dialog.component.css")).default]
    })], InviteDialogComponent);
    /***/
  },

  /***/
  "./src/app/main/dialogs/upload-artifact-dialog/upload-dialog.component.css":
  /*!*********************************************************************************!*\
    !*** ./src/app/main/dialogs/upload-artifact-dialog/upload-dialog.component.css ***!
    \*********************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppMainDialogsUploadArtifactDialogUploadDialogComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".form\n{\n    min-width: 150px;\n    max-width: 500px;\n    width: 100%;\n}\n\n.fields\n{\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi9kaWFsb2dzL3VwbG9hZC1hcnRpZmFjdC1kaWFsb2cvdXBsb2FkLWRpYWxvZy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztJQUVJLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsV0FBVztBQUNmOztBQUVBOztFQUVFLFdBQVc7QUFDYiIsImZpbGUiOiJzcmMvYXBwL21haW4vZGlhbG9ncy91cGxvYWQtYXJ0aWZhY3QtZGlhbG9nL3VwbG9hZC1kaWFsb2cuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mb3JtXG57XG4gICAgbWluLXdpZHRoOiAxNTBweDtcbiAgICBtYXgtd2lkdGg6IDUwMHB4O1xuICAgIHdpZHRoOiAxMDAlO1xufVxuXG4uZmllbGRzXG57XG4gIHdpZHRoOiAxMDAlO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/main/dialogs/upload-artifact-dialog/upload-dialog.component.ts":
  /*!********************************************************************************!*\
    !*** ./src/app/main/dialogs/upload-artifact-dialog/upload-dialog.component.ts ***!
    \********************************************************************************/

  /*! exports provided: UploadDialogComponent */

  /***/
  function srcAppMainDialogsUploadArtifactDialogUploadDialogComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UploadDialogComponent", function () {
      return UploadDialogComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");
    /* harmony import */


    var src_app_services_artifacts_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/services/artifacts.service */
    "./src/app/services/artifacts.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var src_app_services_document_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/services/document.service */
    "./src/app/services/document.service.ts");

    let UploadDialogComponent = class UploadDialogComponent {
      constructor(dialogRef, dialogData, snackBar, artServ, docServ, route) {
        this.dialogRef = dialogRef;
        this.dialogData = dialogData;
        this.snackBar = snackBar;
        this.artServ = artServ;
        this.docServ = docServ;
        this.route = route;
        this.hasUploaded = false;
        this.selectedFile = null;
      }

      ngOnInit() {}

      fileInputChange(event) {
        this.selectedFile = event.target.files[0];
        const reader = new FileReader();
        reader.readAsDataURL(this.selectedFile);

        reader.onload = () => {
          this.fileData = reader.result;
        };
      }

      closeDialog() {
        this.dialogRef.close();
      }

      removeFile() {
        this.selectedFile = null;
      }

      uploadFile(name, comment) {
        let artID = this.dialogData.art_id;
        let lastModifiedDate = new Date(this.selectedFile.lastModified); // place the time stamp in the date object's contructor

        let lastModified = this.formatDate(lastModifiedDate);
        let uploadedDate = new Date();
        let dateUploaded = this.formatDate(uploadedDate);

        if (name.length === 0 || comment.length === 0) {
          this.snackBar.open("Input fields cannot be empty", "Okay");
          return;
        }

        let document = {};
        document['version'] = name;
        document['comment'] = comment;
        document['date_modified'] = lastModified;
        document['date_uploaded'] = dateUploaded;
        document['data'] = this.fileData;
        document['file_type'] = this.selectedFile.type;
        this.docServ.uploadDocument(artID, document).subscribe(event => {
          let totalData = event['total'];
          let dataLoaded = event['loaded'];
          let message = event['statusText'];
          this.hasUploaded = true;

          if (message === 'OK') {
            this.docServ.getDocuments(this.dialogData.art_id);
            let snackbarRef = this.snackBar.open('Document uploaded successfuly', 'Okay', {
              duration: 5000
            });
            snackbarRef.onAction().subscribe(_ => {
              this.dialogRef.close();
            });
          }

          this.uploadProgress = dataLoaded / totalData * 100;
        });
      }

      formatDate(date) {
        let year = date.getFullYear();
        let day = date.getDate() + "";
        let month = date.getMonth() + 1 + ""; // parse in full format dd/mm/yyyy instead of d/m/yyyy

        if (day.length === 1) day = "0" + day;
        if (month.length === 1) month = "0" + month;
        return "".concat(day, "/").concat(month, "/").concat(year);
      }

    };

    UploadDialogComponent.ctorParameters = () => [{
      type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"]
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
        args: [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]]
      }]
    }, {
      type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"]
    }, {
      type: src_app_services_artifacts_service__WEBPACK_IMPORTED_MODULE_3__["ArtifactsService"]
    }, {
      type: src_app_services_document_service__WEBPACK_IMPORTED_MODULE_5__["DocumentService"]
    }, {
      type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
    }];

    UploadDialogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-upload-dialog',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./upload-dialog.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/main/dialogs/upload-artifact-dialog/upload-dialog.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./upload-dialog.component.css */
      "./src/app/main/dialogs/upload-artifact-dialog/upload-dialog.component.css")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]))], UploadDialogComponent);
    /***/
  },

  /***/
  "./src/app/main/dialogs/work-space-add-member-dialog/work-space-add-member.component.css":
  /*!***********************************************************************************************!*\
    !*** ./src/app/main/dialogs/work-space-add-member-dialog/work-space-add-member.component.css ***!
    \***********************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppMainDialogsWorkSpaceAddMemberDialogWorkSpaceAddMemberComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".form\n{\n    min-width: 150px;\n    max-width: 500px;\n    width: 100%;\n}\n\n.fields\n{\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWFpbi9kaWFsb2dzL3dvcmstc3BhY2UtYWRkLW1lbWJlci1kaWFsb2cvd29yay1zcGFjZS1hZGQtbWVtYmVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0lBRUksZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQixXQUFXO0FBQ2Y7O0FBRUE7O0VBRUUsV0FBVztBQUNiIiwiZmlsZSI6InNyYy9hcHAvbWFpbi9kaWFsb2dzL3dvcmstc3BhY2UtYWRkLW1lbWJlci1kaWFsb2cvd29yay1zcGFjZS1hZGQtbWVtYmVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZm9ybVxue1xuICAgIG1pbi13aWR0aDogMTUwcHg7XG4gICAgbWF4LXdpZHRoOiA1MDBweDtcbiAgICB3aWR0aDogMTAwJTtcbn1cblxuLmZpZWxkc1xue1xuICB3aWR0aDogMTAwJTtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/main/dialogs/work-space-add-member-dialog/work-space-add-member.component.ts":
  /*!**********************************************************************************************!*\
    !*** ./src/app/main/dialogs/work-space-add-member-dialog/work-space-add-member.component.ts ***!
    \**********************************************************************************************/

  /*! exports provided: WorkSpaceAddMemberComponent */

  /***/
  function srcAppMainDialogsWorkSpaceAddMemberDialogWorkSpaceAddMemberComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "WorkSpaceAddMemberComponent", function () {
      return WorkSpaceAddMemberComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var src_app_services_work_space_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/services/work-space.service */
    "./src/app/services/work-space.service.ts");

    let WorkSpaceAddMemberComponent = class WorkSpaceAddMemberComponent {
      constructor(dialogRef, workspaceService, dialogData, snackBar) {
        this.dialogRef = dialogRef;
        this.workspaceService = workspaceService;
        this.dialogData = dialogData;
        this.snackBar = snackBar;
        this.myControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]();
        this.options = ['One', 'Two', 'Three'];
      }

      ngOnInit() {
        this.filteredOptions = this.myControl.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["startWith"])(''), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(value => this._filter(value)));
        console.log(this.dialogData);
      }

      _filter(value) {
        const filterValue = value.email.toLowerCase();
        return this.emailOptions.filter(option => option.email.toLowerCase().indexOf(filterValue) === 0);
      }

      search(event) {
        let email = event.target.value;
        this.workspaceService.emailSuggestion(email).subscribe(observable => {
          this.emailOptions = observable;
        });
      }

      closeDialog() {
        this.dialogRef.close();
      }

      addToWorkspace(email) {
        const workspaceID = this.dialogData.workspaceID;
        this.workspaceService.addMember(workspaceID, email).subscribe(observable => {
          const message = observable['message'];

          if (message === 'user_exists') {
            this.snackBar.open("Member exsits", "Okay");
          } else if (message === 'success') {
            const snackBarRef = this.snackBar.open("Member added to workspace", "Okay");
            snackBarRef.afterDismissed().subscribe(_ => {
              this.dialogRef.close();
            });
          }
        });
      }

    };

    WorkSpaceAddMemberComponent.ctorParameters = () => [{
      type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"]
    }, {
      type: src_app_services_work_space_service__WEBPACK_IMPORTED_MODULE_5__["WorkSpaceService"]
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
        args: [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]]
      }]
    }, {
      type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"]
    }];

    WorkSpaceAddMemberComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-work-space-add-member',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./work-space-add-member.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/main/dialogs/work-space-add-member-dialog/work-space-add-member.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./work-space-add-member.component.css */
      "./src/app/main/dialogs/work-space-add-member-dialog/work-space-add-member.component.css")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]))], WorkSpaceAddMemberComponent);
    /***/
  },

  /***/
  "./src/app/main/main/main.component.css":
  /*!**********************************************!*\
    !*** ./src/app/main/main/main.component.css ***!
    \**********************************************/

  /*! exports provided: default */

  /***/
  function srcAppMainMainMainComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21haW4vbWFpbi9tYWluLmNvbXBvbmVudC5jc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/main/main/main.component.ts":
  /*!*********************************************!*\
    !*** ./src/app/main/main/main.component.ts ***!
    \*********************************************/

  /*! exports provided: MainComponent */

  /***/
  function srcAppMainMainMainComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MainComponent", function () {
      return MainComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");

    let MainComponent = class MainComponent {
      constructor() {}

      ngOnInit() {
        let selectedIndex = localStorage.selectedMainTabIndex || 0;
        this.selectedTab = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](selectedIndex);
      } // Persist the value of the tab index


      setTabValue(index) {
        localStorage.selectedMainTabIndex = index;
        this.selectedTab.setValue(index);
      }

    };
    MainComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-main',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./main.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/main/main/main.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./main.component.css */
      "./src/app/main/main/main.component.css")).default]
    })], MainComponent);
    /***/
  },

  /***/
  "./src/app/models/environment.ts":
  /*!***************************************!*\
    !*** ./src/app/models/environment.ts ***!
    \***************************************/

  /*! exports provided: Environment */

  /***/
  function srcAppModelsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Environment", function () {
      return Environment;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    class Environment {
      constructor() {
        this.prod = true; // make this is always false when testing

        let isNextworked = false;
        const urlLocal = isNextworked ? "http://192.168.100.192:3000/" : 'http://localhost:3000/';
        this.url = this.prod ? "https://artifactspro.herokuapp.com/" : urlLocal;
      }

      baseURL() {
        return this.url;
      }

    }
    /***/

  },

  /***/
  "./src/app/models/organization.ts":
  /*!****************************************!*\
    !*** ./src/app/models/organization.ts ***!
    \****************************************/

  /*! exports provided: Organization */

  /***/
  function srcAppModelsOrganizationTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Organization", function () {
      return Organization;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    class Organization {
      constructor(params) {
        this.owner = params.user_id;
        this.orgID = params.org_id;
        this.type = params.type;
        this.name = params.name;
        this.key = params.org_key;
        this.code = params.org_code;
      }

      getName() {
        return this.name;
      }

    }
    /***/

  },

  /***/
  "./src/app/services/artifacts.service.ts":
  /*!***********************************************!*\
    !*** ./src/app/services/artifacts.service.ts ***!
    \***********************************************/

  /*! exports provided: ArtifactsService */

  /***/
  function srcAppServicesArtifactsServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ArtifactsService", function () {
      return ArtifactsService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _models_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../models/environment */
    "./src/app/models/environment.ts");

    let ArtifactsService = class ArtifactsService {
      constructor(httpClient, environment) {
        this.httpClient = httpClient;
        this.environment = environment;
        this.artifact = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](null);
        this.artifacts = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](null);
        this.artifactObservable = this.artifact.asObservable();
        this.artifactsObservable = this.artifacts.asObservable();
      }

      getAllArtifacts() {
        const observer = this.httpClient.get(this.environment.baseURL() + "api/art", {
          withCredentials: true
        });
        observer.subscribe(artifacts => {
          this.artifacts.next(artifacts);
        });
        return observer;
      }

      getArtifactFromID(artID) {
        return this.httpClient.get(this.environment.baseURL() + "api/art/".concat(artID), {
          withCredentials: true
        });
      }

      createArtifact(name, description, date) {
        let date_created = date;
        return this.httpClient.post(this.environment.baseURL() + "api/art/create", {
          name,
          description,
          date_created
        }, {
          withCredentials: true
        });
      }

      deleteArtifact(artID) {
        return this.httpClient.delete(this.environment.baseURL() + "api/art/delete/".concat(artID), {
          withCredentials: true
        });
      }

      nameSearch(key) {
        this.httpClient.get(this.environment.baseURL() + "api/art/search?key=".concat(key), {
          withCredentials: true
        }).subscribe(artifacts => {
          this.artifacts.next(artifacts);
        });
      }

    };

    ArtifactsService.ctorParameters = () => [{
      type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
    }, {
      type: _models_environment__WEBPACK_IMPORTED_MODULE_4__["Environment"]
    }];

    ArtifactsService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], ArtifactsService);
    /***/
  },

  /***/
  "./src/app/services/chat.service.ts":
  /*!******************************************!*\
    !*** ./src/app/services/chat.service.ts ***!
    \******************************************/

  /*! exports provided: ChatService */

  /***/
  function srcAppServicesChatServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ChatService", function () {
      return ChatService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _models_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../models/environment */
    "./src/app/models/environment.ts");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");

    let ChatService = class ChatService {
      constructor(environment, httpClient) {
        this.environment = environment;
        this.httpClient = httpClient;
        this.activeChats = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](null);
        this.activeChatsObservable = this.activeChats.asObservable();
        this.chatMessages = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](null);
        this.chatMessagesObservable = this.chatMessages.asObservable();
      }

      getActiveChats() {
        this.httpClient.get(this.environment.baseURL() + "api/chats/active-chats", {
          withCredentials: true
        }).subscribe(activeChats => {
          this.activeChats.next(activeChats);
        });
      }

      getMessagesFromChat(chatRoomID) {
        this.httpClient.get(this.environment.baseURL() + "api/chats/".concat(chatRoomID, "/load-messages"), {
          withCredentials: true
        }).subscribe(chatMessages => {
          this.chatMessages.next(chatMessages);
        });
      }

      sendMessage(chatText, chatRoomID, timestamp, toUser, fromUser) {
        return this.httpClient.post(this.environment.baseURL() + "api/chats/send-message", {
          chatText,
          chatRoomID,
          timestamp,
          toUser,
          fromUser
        }, {
          withCredentials: true,
          observe: 'response'
        });
      }

      createChatAndChatRoom(senderID, recieverID, messageContent, timestamp) {
        return this.httpClient.post(this.environment.baseURL() + "api/chats/create-chat", {
          senderID,
          recieverID,
          messageContent,
          timestamp
        }, {
          withCredentials: true,
          observe: "response"
        });
      }

    };

    ChatService.ctorParameters = () => [{
      type: _models_environment__WEBPACK_IMPORTED_MODULE_2__["Environment"]
    }, {
      type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]
    }];

    ChatService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], ChatService);
    /***/
  },

  /***/
  "./src/app/services/document.service.ts":
  /*!**********************************************!*\
    !*** ./src/app/services/document.service.ts ***!
    \**********************************************/

  /*! exports provided: DocumentService */

  /***/
  function srcAppServicesDocumentServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DocumentService", function () {
      return DocumentService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _models_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../models/environment */
    "./src/app/models/environment.ts");

    let DocumentService = class DocumentService {
      constructor(httpClient, environment) {
        this.httpClient = httpClient;
        this.environment = environment;
        this.document = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](null);
        this.documents = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](null);
        this.documentObservable = this.document.asObservable();
        this.documentsObservable = this.documents.asObservable();
      }

      getDocuments(artID) {
        const observer = this.httpClient.get(this.environment.baseURL() + "api/docs/from-art/".concat(artID), {
          withCredentials: true
        });
        observer.subscribe(documents => {
          this.documents.next(documents);
        });
      }

      uploadDocument(artID, document) {
        const request = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpRequest"]('POST', this.environment.baseURL() + "api/docs/upload/".concat(artID), document, {
          reportProgress: true,
          withCredentials: true
        });
        return this.httpClient.request(request);
      }

      providePreviewLink(artID, docID) {
        return this.httpClient.post(this.environment.baseURL() + "api/docs/link/".concat(artID, "/").concat(docID), {}, {
          withCredentials: true
        });
      }

      deleteDocument(docID) {
        return this.httpClient.delete(this.environment.baseURL() + "api/docs/delete/".concat(docID));
      }

    };

    DocumentService.ctorParameters = () => [{
      type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
    }, {
      type: _models_environment__WEBPACK_IMPORTED_MODULE_4__["Environment"]
    }];

    DocumentService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], DocumentService);
    /***/
  },

  /***/
  "./src/app/services/member.service.ts":
  /*!********************************************!*\
    !*** ./src/app/services/member.service.ts ***!
    \********************************************/

  /*! exports provided: MemberService */

  /***/
  function srcAppServicesMemberServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MemberService", function () {
      return MemberService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _models_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../models/environment */
    "./src/app/models/environment.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");

    let MemberService = class MemberService {
      constructor(httpClient, environment) {
        this.httpClient = httpClient;
        this.environment = environment;
        this.members = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"](null);
        this.membersObservable = this.members.asObservable();
      }

      getAllMembers() {
        this.httpClient.get(this.environment.baseURL() + 'api/members/all', {
          withCredentials: true
        }).subscribe(members => {
          this.members.next(members);
        });
      }

      getInviteURL() {
        return this.httpClient.get(this.environment.baseURL() + 'api/members/invite-code', {
          withCredentials: true
        });
      }

    };

    MemberService.ctorParameters = () => [{
      type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
    }, {
      type: _models_environment__WEBPACK_IMPORTED_MODULE_2__["Environment"]
    }];

    MemberService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], MemberService);
    /***/
  },

  /***/
  "./src/app/services/organization.service.ts":
  /*!**************************************************!*\
    !*** ./src/app/services/organization.service.ts ***!
    \**************************************************/

  /*! exports provided: OrganizationService */

  /***/
  function srcAppServicesOrganizationServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OrganizationService", function () {
      return OrganizationService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _models_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../models/environment */
    "./src/app/models/environment.ts");

    let OrganizationService = class OrganizationService {
      constructor(httpClient, environment) {
        this.httpClient = httpClient;
        this.environment = environment;
        this.jwtToken = localStorage.getItem("jwt_token");
      }

      createOrganization(name, orgKey, orgPassKey) {
        return this.httpClient.post(this.environment.baseURL() + "api/org/create", {
          name,
          orgKey,
          orgPassKey
        }, {
          withCredentials: true,
          observe: "response"
        });
      }

      setOrganization(organization) {
        this.organization = organization;
      }

      getOrganization() {
        return this.httpClient.get(this.environment.baseURL() + 'api/org/info', {
          withCredentials: true
        }).toPromise();
      }

      getOrganizyionFromAccessCode(accessCode) {
        return this.httpClient.get(this.environment.baseURL() + "api/org/info-from/access-code/".concat(accessCode), {
          withCredentials: true
        });
      }

      addUserToOganization(accessCode) {
        return this.httpClient.post(this.environment.baseURL() + "api/org//invite-from-code/".concat(accessCode), {}, {
          withCredentials: true,
          observe: "response"
        });
      }

    };

    OrganizationService.ctorParameters = () => [{
      type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
    }, {
      type: _models_environment__WEBPACK_IMPORTED_MODULE_3__["Environment"]
    }];

    OrganizationService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], OrganizationService);
    /***/
  },

  /***/
  "./src/app/services/socket.service.ts":
  /*!********************************************!*\
    !*** ./src/app/services/socket.service.ts ***!
    \********************************************/

  /*! exports provided: SocketService */

  /***/
  function srcAppServicesSocketServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SocketService", function () {
      return SocketService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var socket_io_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! socket.io-client */
    "./node_modules/socket.io-client/lib/index.js");
    /* harmony import */


    var socket_io_client__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(socket_io_client__WEBPACK_IMPORTED_MODULE_2__);
    /* harmony import */


    var _models_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../models/environment */
    "./src/app/models/environment.ts");

    let SocketService = class SocketService {
      constructor(environment) {
        this.environment = environment;
        this.socketConn = socket_io_client__WEBPACK_IMPORTED_MODULE_2__(this.environment.baseURL());
      }

      get socket() {
        return this.socketConn;
      }

    };

    SocketService.ctorParameters = () => [{
      type: _models_environment__WEBPACK_IMPORTED_MODULE_3__["Environment"]
    }];

    SocketService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], SocketService);
    /***/
  },

  /***/
  "./src/app/services/user.service.ts":
  /*!******************************************!*\
    !*** ./src/app/services/user.service.ts ***!
    \******************************************/

  /*! exports provided: UserService */

  /***/
  function srcAppServicesUserServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserService", function () {
      return UserService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _models_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../models/environment */
    "./src/app/models/environment.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    let UserService = class UserService {
      constructor(httpClient, environment, router) {
        this.httpClient = httpClient;
        this.environment = environment;
        this.router = router;
        this.jwtToken = localStorage.getItem("jwt_token");
        this.authHeader = {
          "Authorization": this.jwtToken
        };
      }

      authUser() {
        this.httpClient.post(this.environment.baseURL() + 'api/user/auth', {}, {
          withCredentials: true,
          observe: 'response'
        }).subscribe(observer => {// Do nothing  
        }, err => {
          let status = err.status;
          let activeUrl = this.router.url;
          if (status === 401 && activeUrl.includes('/app')) this.router.navigate(['/error'], {
            replaceUrl: true
          });
        });
      }

      signup(email, password) {
        let body = {
          email,
          password
        };
        return this.httpClient.post(this.environment.baseURL() + "api/user/signup/process-1", body, {
          observe: "response",
          withCredentials: true
        });
      }

      login(email, password) {
        let body = {
          email,
          password
        };
        return this.httpClient.post(this.environment.baseURL() + "api/user/login", body, {
          withCredentials: true,
          observe: "response"
        });
      }

      getUserInfo() {
        return this.httpClient.get(this.environment.baseURL() + "api/user/info", {
          withCredentials: true
        });
      }

      verifyUser(first_name, last_name, accessCode) {
        return this.httpClient.post(this.environment.baseURL() + "api/user/verify/".concat(accessCode), {
          first_name,
          last_name
        }, {
          withCredentials: true,
          observe: "response"
        });
      }

      signOut() {
        return this.httpClient.post(this.environment.baseURL() + 'api/user/logout', {}, {
          withCredentials: true
        });
      }

    };

    UserService.ctorParameters = () => [{
      type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
    }, {
      type: _models_environment__WEBPACK_IMPORTED_MODULE_3__["Environment"]
    }, {
      type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
    }];

    UserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], UserService);
    /***/
  },

  /***/
  "./src/app/services/util.service.ts":
  /*!******************************************!*\
    !*** ./src/app/services/util.service.ts ***!
    \******************************************/

  /*! exports provided: UtilService */

  /***/
  function srcAppServicesUtilServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UtilService", function () {
      return UtilService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    let UtilService = class UtilService {
      constructor() {}

      getCurrentDate() {
        const date = new Date();
        let day = date.getDate() + '';
        let month = date.getMonth() + 1 + ''; // convert them to string by contacenating them to a string
        // convert the values to double digits if the are not

        if (day.length === 1) day = "0" + day;
        if (month.length === 1) month = "0" + month;
        let year = date.getFullYear();
        return "".concat(day, "/").concat(month, "/").concat(year);
      }

      timeDifference(current, previous) {
        var msPerMinute = 60 * 1000;
        var msPerHour = msPerMinute * 60;
        var msPerDay = msPerHour * 24;
        var msPerMonth = msPerDay * 30;
        var msPerYear = msPerDay * 365;
        var elapsed = current - previous;

        if (elapsed < msPerMinute) {
          return Math.round(elapsed / 1000) + ' seconds ago';
        } else if (elapsed < msPerHour) {
          return Math.round(elapsed / msPerMinute) + ' minutes ago';
        } else if (elapsed < msPerDay) {
          return Math.round(elapsed / msPerHour) + ' hours ago';
        } else if (elapsed < msPerMonth) {
          return Math.round(elapsed / msPerDay) + ' days ago';
        } else if (elapsed < msPerYear) {
          return Math.round(elapsed / msPerMonth) + ' months ago';
        } else {
          return Math.round(elapsed / msPerYear) + ' years ago';
        }
      }

    };
    UtilService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], UtilService);
    /***/
  },

  /***/
  "./src/app/services/work-space.service.ts":
  /*!************************************************!*\
    !*** ./src/app/services/work-space.service.ts ***!
    \************************************************/

  /*! exports provided: WorkSpaceService */

  /***/
  function srcAppServicesWorkSpaceServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "WorkSpaceService", function () {
      return WorkSpaceService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _models_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../models/environment */
    "./src/app/models/environment.ts");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");

    let WorkSpaceService = class WorkSpaceService {
      constructor(httpClient, environment) {
        this.httpClient = httpClient;
        this.environment = environment;
        this.workspacePosts = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"](null);
        this.workspacePostsObservable = this.workspacePosts.asObservable();
        this.workspacePostReplies = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"](null);
        this.workspacePostRepliesObservable = this.workspacePostReplies.asObservable();
        this.workspaces = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"](null);
        this.workspacesObservable = this.workspaces.asObservable();
        this.artifacts = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"](null);
        this.artifactsObservable = this.artifacts.asObservable();
      }

      getWorkSpaces() {
        this.httpClient.get(this.environment.baseURL() + "api/workspace/all", {
          withCredentials: true
        }).subscribe(workspaces => {
          this.workspaces.next(workspaces);
        });
      }

      createWorkSpace(name, dateCreated) {
        return this.httpClient.post(this.environment.baseURL() + 'api/workspace/create', {
          workspace_name: name,
          date_created: dateCreated
        }, {
          withCredentials: true
        });
      }

      getWorkspaceInfo(workspaceID) {
        return this.httpClient.get(this.environment.baseURL() + "api/workspace/".concat(workspaceID), {
          withCredentials: true
        });
      } // TODO : Test this method


      getMembers(workspaceID) {
        return this.httpClient.get(this.environment.baseURL() + "api/workspace/".concat(workspaceID, "/members"), {
          withCredentials: true
        });
      }

      getArtifacts(workspaceID) {
        return this.httpClient.get(this.environment.baseURL() + "api/workspace/".concat(workspaceID, "/artifacts"), {
          withCredentials: true
        }).subscribe(artifacts => {
          this.artifacts.next(artifacts);
        });
      }

      emailSuggestion(email) {
        return this.httpClient.get(this.environment.baseURL() + "api/workspace/suggestion/email?email=".concat(email), {
          withCredentials: true
        });
      }

      artifactsSuggestion(artifactName, workspaceID) {
        return this.httpClient.get(this.environment.baseURL() + "api/workspace/".concat(workspaceID, "/suggestion/artifacts?artifactName=").concat(artifactName), {
          withCredentials: true
        });
      }

      addMember(workspaceID, email) {
        return this.httpClient.post(this.environment.baseURL() + "api/workspace/".concat(workspaceID, "/add-member"), {
          email
        }, {
          withCredentials: true
        });
      }

      postMessage(workspaceID, title, content, time, date, artifactName) {
        return this.httpClient.post(this.environment.baseURL() + "api/workspace/".concat(workspaceID, "/add/message"), {
          title,
          content,
          time,
          date,
          artifactName
        }, {
          withCredentials: true,
          observe: 'response'
        });
      }

      getMessages(workspaceID) {
        this.httpClient.get(this.environment.baseURL() + "api/workspace/".concat(workspaceID, "/messages"), {
          withCredentials: true
        }).subscribe(workspacePosts => {
          this.workspacePosts.next(workspacePosts);
        });
      }

      addArtifact(workspaceID, artifactName) {
        return this.httpClient.post(this.environment.baseURL() + "api/workspace/".concat(workspaceID, "/artifact/add"), {
          artifactName
        }, {
          withCredentials: true,
          observe: "response"
        });
      }

      getWorkspacePost(workspaceID, messageID) {
        return this.httpClient.get(this.environment.baseURL() + "api/workspace/".concat(workspaceID, "/message/").concat(messageID), {
          withCredentials: true
        });
      }

      getWorkspacePostReplies(workspaceID, messageID) {
        this.httpClient.get(this.environment.baseURL() + "api/workspace/".concat(workspaceID, "/message/").concat(messageID, "/replies"), {
          withCredentials: true
        }).subscribe(workspacePostReplies => {
          this.workspacePostReplies.next(workspacePostReplies);
        });
      }

      postWorkspacePostReply(workspaceID, messageID, content, actionType, timestamp) {
        return this.httpClient.post(this.environment.baseURL() + "api/workspace/".concat(workspaceID, "/message/").concat(messageID, "/reply"), {
          content,
          actionType,
          timestamp
        }, {
          observe: "response",
          withCredentials: true
        });
      }

      nameSearch(key) {
        this.httpClient.get(this.environment.baseURL() + "api/workspace/search?key=".concat(key), {
          withCredentials: true
        }).subscribe(workspaces => {
          this.workspaces.next(workspaces);
        });
      }

    };

    WorkSpaceService.ctorParameters = () => [{
      type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
    }, {
      type: _models_environment__WEBPACK_IMPORTED_MODULE_3__["Environment"]
    }];

    WorkSpaceService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], WorkSpaceService);
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js"); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    const environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var hammerjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! hammerjs */
    "./node_modules/hammerjs/hammer.js");
    /* harmony import */


    var hammerjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_4__["AppModule"]).catch(err => console.error(err));
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! /Users/AppProjects/Commercial/ArtifactPro/artifactpro/src/main.ts */
    "./src/main.ts");
    /***/
  },

  /***/
  1:
  /*!********************!*\
    !*** ws (ignored) ***!
    \********************/

  /*! no static exports found */

  /***/
  function _(module, exports) {
    /* (ignored) */

    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map