# CI/CD

CI/CD is a cool DevOps stuff that lets you automate code testing and deployment.

## Deploying your newly commited code to cPanel

### Steps

1. First you need to generate a pair of SSH private and public key. open your terminal. type in:

    ```dos
        ssh-keygen -t rsa -b 4096 -C "yourname@yourMachineName"
    ```

    press Enter.
    type in a short (min 5 characters) passphrase.

    Keys Generated.

    to check:

    ```dos
        cd %HOMEPATH%/.ssh
        ls
    ```

2. Follow the [youtube video](https://www.youtube.com/watch?v=5UHOsRR187Y) to help yourself import you SSH keys to cpanel. Then Authorize your imported keys. Now follow Step 3 after that authorizing stuff.

3. Now open your project folder(this current folder) on VSCode. press ` Ctrl + ` ` to open terminal at that project folder.

    i. set you remote address to push your newly commited code to the cpanel git repository

    ```git
        git remote add cpanel ssh://blessnbliss@blessnbliss.org/home/blessnbliss/BnBwebsiteRepo
    ```

    here ``` cpanel ``` is set as the remote address's name.

    ii. Now push you committed code to cpanel git repo. There the required code will be automatically deployed to  hosting folder(all because of .cpanel.yml file).

    ```dos
        git push -u cpanel master
    ```

    in case, if any error occurs:

    ```dos
        git push cpanel master -u --exec=/usr/local/cpanel/3rdparty/bin/git-receive-pack
    ```

**Voila! You did the deployment on cpanel. check out the website blessnbliss.org to again review your changes.**

For next subsequent newly comitted code deployment: Just follow Step 3.ii.
