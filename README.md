# Password Generator

## Desciption

An application that generates a random password based on user-selected criteria.

## Goals

In the internet age, lots of user information is stored online. In many cases, the only thing standing between your data and the hackers who want to steal it is a good password. This site is designed to create a secure and random password for use on any site that requires password authentication. 

## How It Works

The user clicks on the **Generate Password** button to star the application. The user then chooses what kinds of characters are included in their password. Their choices are:

* **Special Characters** 
* **Numbers** 
* **Capital Letters** 
* **Lowercase Letters** 
* **Number of Characters**

As long as the user chooses at least one of these categories, the application will create a password with the length that they requested. If they don't pick at least one, they will be directed to try again. 

There is also a **Copy to Clipboard** button which takes the created password and copies it to the user's clipboard.

## Complications

During the process of making this password generator, I did run into some problems: 

* I had issues creating a nice look for desktop and mobile.
    * I had a nice look going for the desktop versoin, but once I saw how it would look on mobile, I didn't like how the buttons overlapped once it got below 436px. I solved it by floating both buttons right, making it more asthetically pleasing.
* I had some issues with my javascript code, when it came to the **charCheck** function. If the user fails to select between 8 and 128 characters, it would send them back to the **confirms** function. I was having lots of issues with values not coming out right, because I didn't empty the **possibleOptions** array. 
    * Once I emptied it before going back to **confirms**, everything worked much better.



## Credits and Thanks

The background image was found as a free download from (http://www.wallpaperbro.com).
Thanks to Paul for helping me solve my issues with the **possibleOptions** array.
