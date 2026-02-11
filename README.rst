Advanced XSS Web Application Readme
===================================

.. contents:: :local:


Background
----------
This repository stores the whole architecture for a web application tailored for
Advanced XSS experiments.


Architecture
------------
It comprises various components. The diagram for the whole architecture of
the web application is shown in the image below.

.. image:: images/web_app_architecture.drawio.png
    :width: 700

Frontend
^^^^^^^^
It consists of HTML and JavaScript files that provide the user interface for the application.

Backend
^^^^^^^
It processes the requests from the frontend and serves the necessary data.
It is built for the sake of completeness, but it is not high of an importance in this project.

Start-up script
^^^^^^^^^^^^^^^
A script named ``start_all.sh`` is provided to set up and run both the backend and frontend servers. It also opens the frontend in a web browser automatically.
To run the script, use the following command in your terminal:

.. code:: bash

    ./start_all.sh