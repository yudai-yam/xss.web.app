Advanced XSS Web Application Readme (Frontend)
==============================================

.. contents:: :local:


Procedure
---------
User has to install dependency and run local servers for each framework
to enjoy this application!

Installation
^^^^^^^^^^^^
Run the command below to install the dependencies.

.. code-block::

    npm install

Server Setups
^^^^^^^^^^^^^
Make sure your current path is under the frontend directory.

.. code-block::

    cd frontend


.. code-block::

    php -S 127.0.0.1:5000 router.php


Challenges
----------
* It contains several XSS challenges that give you hands-on experiences!

Input Reflection
^^^^^^^^^^^^^^^^^^
* It is one of the simplest XSS. Payload can be injected in the input box.

URL Injection
^^^^^^^^^^^^^
* It is another piece of simple XSS. Can be triggered by injecting a payload into the URL. 

JQuery Mobile Gadget (Eval)
^^^^^^^^^^^^^^^^^^^^^^^^^^^
* It is an explotation of eval() in Jquery Mobile. This is allowed in the CSP! 

JQuery Mobile Gadget (Popup)
^^^^^^^^^^^^^^^^^^^^^^^^^^^^
* It makes use of the known popup gadget in JQuery Mobile.
* It works in JQuery Mobile version <= 1.3.2. 

postMessage XSS
^^^^^^^^^^^^^^^^
* It exploits a malconfigured postMessage function.

Mutation XSS
^^^^^^^^^^^
* It exploits the behavior of the feature that mutates the code when parsing.

DOM Clobbering
^^^^^^^^^^^^^^
* It confuses a web app by making use of attribute names that matches another legitimate attributes.
* This model works in Chrome and Chromium, but not in Firefox.
