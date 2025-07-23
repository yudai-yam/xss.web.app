Advanced XSS Web Application Readme (Frontend)
==============================================

.. contents:: :local:


Note
----
This repository is currently work in progress.

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
Different server is required for each different framework to work properly.
Make sure your current path is under the frontend directory.

.. code-block::

    cd frontend

- No Framework:

    .. code-block::

        php -S 127.0.0.1:5000

- Polymer:

    .. code-block::

        polymer serve -H 127.0.0.1 -p 8001
 

Challenges
----------
* It contains several XSS challenges that give you hands-on experiences!

Input Reflection
^^^^^^^^^^^^^^^^^^
* It is one of the simplest XSS. Payload can be injected in the input box.
* No CSP implemented.

URL Injection
^^^^^^^^^^^^^
* It is another piece of simple XSS. Can be triggered by injecting a payload into the URL. 
* No CSP implemented.

JQuery Mobile Gadget (Eval)
^^^^^^^^^^^^^^^^^^^^^^^^^^^
* It is an explotation of eval() in Jquery Mobile. This is allowed in the CSP! 

JQuery Mobile Gadget (Popup)
^^^^^^^^^^^^^^^^^^^^^^^^^^^^
* It makes use of the known popup gadget in JQuery Mobile.
* It works in JQuery Mobile version <= 1.3.2.  

Polymer Camel Case Conversion Gadget 
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
* It exploits the camel case conversion feature implemented in Polymer framework by default.
* This page is run on Polymer server in another port. 

JQuery Element Creation Gadget
^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
* It exploits an element creation gadget in JQuery

Post Message XSS
^^^^^^^^^^^^^^^^
* It exploits a malconfigured postMessage function.

MutationXSS
^^^^^^^^^^^
* It exploits the behavior of the feature that mutates the code when parsing.

DOM Clobbering
^^^^^^^^^^^^^^
* It confuseds a web app by making use of attribute names that matches another legitimate attributes.
* It works in Chrome, Chromium, but not in Firefox.