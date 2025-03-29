# Note-Taking App Documentation

## Save Functionality

When a user writes a note into the text field and then clicks the "Save" button, the following sequence of events occurs:

```mermaid
sequenceDiagram
    participant browser
    participant server

    browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note

    Note right of browser: An HTTP POST request is made to the server, with the new note to be added 

    activate server
    server-->>browser: HTTP 302 
    deactivate server

    Note right of browser: The server sends a response asking the browser to do an HTTP GET request to /notes. <br> The page reload causes three HTTP requests, fetching the style sheet, javascript code and raw notes data

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/main.css
    activate server
    server-->>browser: the main.css file
    deactivate server



    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/main.js
    activate server
    server-->>browser: the JavaScript file
    deactivate server

    Note right of browser: The browser starts executing the JavaScript code that fetches the JSON from the server

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/data.json
    activate server
    server-->>browser: [{ "content": "la la la la", "date": "2023-1-1" }, ... ]
    deactivate server

    Note right of browser: The browser executes the callback function that renders the notes, showing the newly created note
```

## Single page app 
##### When a user accesses the single page application, the following events occur: 

```mermaid
sequenceDiagram
    participant browser
    participant server

    Note right of browser: The user navigates to the SPA site
    
    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/spa
    activate server
    server-->>browser: HTML document
    deactivate server
    
    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/spa.js
    activate server
    server-->>browser: the JavaScript file (spa.js)
    deactivate server

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/main.css
    activate server
    server-->>browser: the main.css file
    deactivate server

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/data.json
    activate server
    server-->>browser: [{ "content": "HTML is easy", "date": "2023-1-1" }, ... ]
    deactivate server
    
    Note right of browser: JavaScript executes, fetches JSON and renders notes
```




## Creating a new note in the Single page app 
```mermaid
sequenceDiagram
    participant browser
    participant server

    Note right of browser: User navigates to the SPA
    
    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/spa
    activate server
    server-->>browser: HTML document
    deactivate server
    
    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/spa.js
    activate server
    server-->>browser: the JavaScript file (spa.js)
    deactivate server
    
    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/data.json
    activate server
    server-->>browser: [{ "content": "HTML is easy", "date": "2023-1-1" }, ... ]
    deactivate server
    
    Note right of browser: JavaScript executes, fetches JSON and renders notes
    
    Note right of browser: User fills form and submits a new note
    
    Note right of browser: JavaScript event handler intercepts form submission

    Note right of browser: JavaScript prevents default form behavior

    Note right of browser: JavaScript adds the note to the notes array

    Note right of browser: JavaScript rerenders the notes list
    
    browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note_spa
    Note right of browser: An HTTP POST request is made to the server, with the new note to be added encoded as JSON data 
    Note right of browser: Content-Type header set to application/json

    activate server
    server-->>browser: HTTP 201 (Created) 
    deactivate server

    Note right of browser: The server sends a response with status code 201, which indicates a new resource was created
    Note right of browser: The browser stays on the same page, and no new HTTP requests needed
```