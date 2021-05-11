# CI/CD

CI/CD is a cool DevOps stuff that lets you automate code testing and deployment.

## Deploying your newly commited code to cPanel

### Steps

1. First you need to generate a pair of SSH private and public key. *open git bash*. Type in:

    ```bash
    $ cd ~/
    $ mkdir .ssh
    $ cd .ssh
    $ ssh-keygen -t rsa -b 4096 -C "yourname@BnBcPanel"
    > Generating public/private rsa key pair.
    ```

    Here we have labelled that key as "yourname@BnBcPanel". I labelled as ashuvssut@BnBcPanel for myself.

    Next, since the key is stored in a file...now you have to provide a name to the key file. I named it as ashuvssut@BnBcPanel_rsa.

    ```bash
    > Enter a file in which to save the key (/c/Users/you/.ssh/id_rsa):
    ```

    Next, Type in a short (min 5 characters) passphrase when asked.

    Keys Generated!

    Next, add you newly generated key to ssh-agent so that it knows/includes that key (in its register-book😅).
    but before that ensure that ssh-agent is running

    ```bash
    # start the ssh-agent in the background
    $ eval $(ssh-agent -s)
    > Agent pid 796

    # add the key to ssh-agent using ssh-add
    $ ssh-add ~/.ssh/yourname@BnBcPanel_rsa
    ```

2. Follow the [youtube video](https://www.youtube.com/watch?v=5UHOsRR187Y) to help yourself import you SSH keys to cpanel (label the keys as yourname@yourMachineName). Then Authorize your imported keys. Now follow Step 3 after that authorizing stuff.

3. Now open your project folder(this current folder) on VSCode. press ` Ctrl + ` ` to open terminal (or open any terminal) at that project folder.

    i. set you remote address (with the remote address of cpanel git repo that i have already created) to push your newly commited code to the cpanel git repository

    ```dos
    git remote add cpanel ssh://blessnbliss@blessnbliss.org/home/blessnbliss/BnBwebsiteRepo
    ```

    here `cpanel` is set as the remote address's name.

    ii. Now push you committed code to cpanel git repo. There the required code will be automatically deployed to cPanel hosting folder(all because of .cpanel.yml file).

    ```dos
    git push -u cpanel master
    ```

    **in case, if error occurs:**

    ```dos
    git push cpanel master -u --exec=/usr/local/cpanel/3rdparty/bin/git-receive-pack
    ```

    alternatively run `deploy.bat` ( a batch file that has the above push command in it). Its a shortcut😅.

    ```dos
    > deploy.bat
    ```

**Voila! You did the deployment on cpanel. check out the website blessnbliss.org if you want to review your changes.**

For next subsequent newly comitted code deployment: Just follow Step 3.ii.
