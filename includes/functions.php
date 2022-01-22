<?php

/**
 * Function to display the page according to the url
 *
 * @return mixed page
 */
function loadPage()
{
    if (isset($_GET['page'])) {
        $modulo = "./pages/" . $_GET['page'] . ".php";
        if (file_exists($modulo)) {
            $page = $_GET['page'];
        } else {
            $page = '404';
        }
    } else {
        $page = 'home';
    }

    return include('./pages/' . $page . '.php');
}