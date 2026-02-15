/*
  The DTS OpenIDPlugin provides the logged in user to the javascript via a javascript global variable: dtswpoidp.
  This includes the user's agency and division and other information that isn't normally provided in the actual
  WordPress user. This allows the javascript developer to program around the user's agency information for displaying
  pertinent information.

  Use WordPress' functionality to get the WordPress user. This is provided additional information about the user's
  State of Utah account information.

  Note that javascript is not a firm security solution. Showing and hiding secure content
  solely based on javascript is hackable! Anyone can edit the javascript or run their own javascript to expose
  the content they maybe shouldn't see.

  Example usage of global javascript variable:
    console.log('dtswpoidp', dtswpoidp);
    if (dtswpoidp.openIdUser.agency == '110') {
      console.log(dtswpoidp.openIdUser);
      alert('You are DTS!');
    }

    *** !!!THIS FILE IS NEEDED!!! ***
    This file is enqueued and the actual global variable is inlined in to it.
*/