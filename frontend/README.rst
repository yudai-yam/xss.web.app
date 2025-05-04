Advanced XSS Web Application Readme (Frontend)
==============================================

.. contents:: :local:


Note
----
This repository is currently work in progress

Procedure
---------
User has to install dependency and run local servers for each framework
to enjoy this application!

Installation
^^^^^^^^^^^^

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

        php -S 127.0.0.1:8000

- Polymer:

    .. code-block::

        polymer serve -H 127.0.0.1 -p 8001
 

Challgenes
----------
It contains several XSS challenges that give you hands-on experiences!

- Input Reflection
It is one of the simplest XSS. No CSP implemented.

- URL Injection
It is another piece of simple XSS. No CSP implemented.

- Jquery Mobile Gadget (Eval)
Some explanation
- Jquery Mobile Gadget (Popup)
- Polymer Camel Case Conversion Gadget 
- Jquery Element Creation Gadget