This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

Proposed file structure: 
````
- src
  - client
    - account                // managing user account, e.g. sign up, login, settings
    - app                     // app entry point
      - common                 // app specific components, e.g. AppBar
      - redux-modules         // ducks
    - component              // ? shared dumb components
    - list                   // individual wishlist, e.g. ListPreview, ListRead, ListEdit
    - list-item               // individual wishlist item
    - profile                // related to user's profile, e.g. display name, avatar, following

````

hello