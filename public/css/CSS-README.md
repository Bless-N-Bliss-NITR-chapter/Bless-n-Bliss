# Important info about CSS

- These css files must not be modified explicitly in any case

- If you wish to add/modify css. Make changes to the SASS and compile it with the Live SASS Compiler (by Ritwick Dey) in VS Code.
  - make sure to make changes in you settings.json as follows:

    1. Type Ctrl+Shift+P and then type "Open settings (JSON)". press Enter.
    2. Edit the settings.json by adding the code below

        ```json
        //Copy the code below

        "liveSassCompile.settings.formats":[
            {
                "format": "compressed",
                "extensionName": ".min.css",
                "savePath": "/public/css"
            },
            {
                "format": "expanded",
                "extensionName": ".css",
                "savePath": "/public/css"
            },
        ]
        ```

## Learn SASS

Learn SASS on YouTube. Follow the links below:

- #6 Imp: <https://www.youtube.com/watch?v=NWupx6SzHd0>
- #7 Imp: <https://www.youtube.com/watch?v=c3fwnwSRGU0>
- #8 Not so important unless You decide to create new .scss files: <https://www.youtube.com/watch?v=GI1BhlDtoUs>
- #9 important but optional: Learn mixins: <https://www.youtube.com/watch?v=Sml4jVk445c>

- Very helpful site to give you the knowledge about SASS best practices: <http://smacss.com/book/categorizing>

- There are three Rules folder in the main sass folder.

  - **Base rules** are the defaults. They are almost exclusively single element selectors but it could include attribute selectors, pseudo-class selectors, child selectors or sibling selectors. **Essentially, a base style says that wherever this element is on the page, it should look like this only**.
  
    The files in it are the foundation and must not be disturbed. They just normalize the default HTML stylings.
  
  - **Layout rules** divide the page into sections. Layouts hold one or more modules together.

    **NOTE**: styling of modules in done in **Modules rules**
  
    - layouts mainly have html-page-name-sections.scss files. each section .scss file are related to individual HTML files used in the project.

      - for example:-
        - about-us-sections.scss
        - home-page-sections.scss
        - contact-us-sections.scss

  - **Modules** are the reusable, modular parts of our design. They are the call-outs, navbar, sidebar sections, carousel, buttons, the product lists and so on.

    Write these Module css rules such that they can be reused by other. For example: instead of making separate classes of same module type (eg ```.video-carousel```, ```.photo-carousel``` & ```.testimonial-carousel``` ...which belong to module type ```.carousel```) make a single ```.carousel``` class so that it could applied to ```.video-carousel```, ```.photo-carousel``` & ```.testimonial-carousel```. by this, all properties in ```.carousel``` will be present in the other three.
  
  All new scss files must be indexed in their respective dir.scss file present in each rules folders.
