$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("bookHotel.feature");
formatter.feature({
  "line": 2,
  "name": "Make Hotel Booking",
  "description": "As a Booking Agent\nI want to make / delete bookings on the online portal\nSo that there is a record of guests list",
  "id": "make-hotel-booking",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 11,
  "name": "Save booking - Happy Path",
  "description": "",
  "id": "make-hotel-booking;save-booking---happy-path",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 13,
  "name": "I add booking details with \u003cfName\u003e,\u003csName\u003e,\u003cdeposit\u003e,\u003cdepositPaid\u003e,\u003ccheckin\u003e and \u003ccheckout\u003e",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "Save the booking and verify the same",
  "keyword": "Then "
});
formatter.examples({
  "line": 16,
  "name": "",
  "description": "",
  "id": "make-hotel-booking;save-booking---happy-path;",
  "rows": [
    {
      "cells": [
        "fName",
        "sName",
        "deposit",
        "depositPaid",
        "checkin",
        "checkout"
      ],
      "line": 17,
      "id": "make-hotel-booking;save-booking---happy-path;;1"
    },
    {
      "cells": [
        "Joe",
        "Adams",
        "0",
        "True",
        "2018-10-01",
        "2018-10-01"
      ],
      "line": 18,
      "id": "make-hotel-booking;save-booking---happy-path;;2"
    },
    {
      "cells": [
        "Delete",
        "Pickle",
        "10.99",
        "False",
        "2028-02-29",
        "2018-10-01"
      ],
      "line": 19,
      "id": "make-hotel-booking;save-booking---happy-path;;3"
    },
    {
      "cells": [
        "Adam",
        "Sandler",
        "99999999999.99",
        "False",
        "2058-02-29",
        "2088-10-01"
      ],
      "line": 20,
      "id": "make-hotel-booking;save-booking---happy-path;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 2060900928,
  "status": "passed"
});
formatter.background({
  "line": 7,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 9,
  "name": "I am on the hotel Booking page",
  "keyword": "Given "
});
formatter.match({
  "location": "hotelBookingSteps.accessHomePage()"
});
formatter.result({
  "duration": 6370431445,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "Save booking - Happy Path",
  "description": "",
  "id": "make-hotel-booking;save-booking---happy-path;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 13,
  "name": "I add booking details with Joe,Adams,0,True,2018-10-01 and 2018-10-01",
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4,
    5
  ],
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "Save the booking and verify the same",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Joe",
      "offset": 27
    },
    {
      "val": "Adams",
      "offset": 31
    },
    {
      "val": "0",
      "offset": 37
    },
    {
      "val": "True",
      "offset": 39
    },
    {
      "val": "2018-10-01",
      "offset": 44
    },
    {
      "val": "2018-10-01",
      "offset": 59
    }
  ],
  "location": "hotelBookingSteps.addBookingDetails(String,String,String,String,String,String)"
});
formatter.result({
  "duration": 503074557,
  "status": "passed"
});
formatter.match({
  "location": "hotelBookingSteps.saveAndVerifyBooking()"
});
formatter.result({
  "duration": 7201559962,
  "status": "passed"
});
formatter.after({
  "duration": 142964187,
  "status": "passed"
});
formatter.before({
  "duration": 946126934,
  "status": "passed"
});
formatter.background({
  "line": 7,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 9,
  "name": "I am on the hotel Booking page",
  "keyword": "Given "
});
formatter.match({
  "location": "hotelBookingSteps.accessHomePage()"
});
formatter.result({
  "duration": 3930186678,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "Save booking - Happy Path",
  "description": "",
  "id": "make-hotel-booking;save-booking---happy-path;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 13,
  "name": "I add booking details with Delete,Pickle,10.99,False,2028-02-29 and 2018-10-01",
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4,
    5
  ],
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "Save the booking and verify the same",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Delete",
      "offset": 27
    },
    {
      "val": "Pickle",
      "offset": 34
    },
    {
      "val": "10.99",
      "offset": 41
    },
    {
      "val": "False",
      "offset": 47
    },
    {
      "val": "2028-02-29",
      "offset": 53
    },
    {
      "val": "2018-10-01",
      "offset": 68
    }
  ],
  "location": "hotelBookingSteps.addBookingDetails(String,String,String,String,String,String)"
});
formatter.result({
  "duration": 566303661,
  "status": "passed"
});
formatter.match({
  "location": "hotelBookingSteps.saveAndVerifyBooking()"
});
formatter.result({
  "duration": 7246243972,
  "status": "passed"
});
formatter.after({
  "duration": 123519216,
  "status": "passed"
});
formatter.before({
  "duration": 925014029,
  "status": "passed"
});
formatter.background({
  "line": 7,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 9,
  "name": "I am on the hotel Booking page",
  "keyword": "Given "
});
formatter.match({
  "location": "hotelBookingSteps.accessHomePage()"
});
formatter.result({
  "duration": 4305847237,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "Save booking - Happy Path",
  "description": "",
  "id": "make-hotel-booking;save-booking---happy-path;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 13,
  "name": "I add booking details with Adam,Sandler,99999999999.99,False,2058-02-29 and 2088-10-01",
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4,
    5
  ],
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "Save the booking and verify the same",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Adam",
      "offset": 27
    },
    {
      "val": "Sandler",
      "offset": 32
    },
    {
      "val": "99999999999.99",
      "offset": 40
    },
    {
      "val": "False",
      "offset": 55
    },
    {
      "val": "2058-02-29",
      "offset": 61
    },
    {
      "val": "2088-10-01",
      "offset": 76
    }
  ],
  "location": "hotelBookingSteps.addBookingDetails(String,String,String,String,String,String)"
});
formatter.result({
  "duration": 612876038,
  "status": "passed"
});
formatter.match({
  "location": "hotelBookingSteps.saveAndVerifyBooking()"
});
formatter.result({
  "duration": 7265655175,
  "status": "passed"
});
formatter.after({
  "duration": 114537439,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 23,
  "name": "Save Booking - Invalid Inputs",
  "description": "",
  "id": "make-hotel-booking;save-booking---invalid-inputs",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 25,
  "name": "I add booking details with \u003cfName\u003e,\u003csName\u003e,\u003cdeposit\u003e,\u003cdepositPaid\u003e,\u003ccheckin\u003e and \u003ccheckout\u003e",
  "keyword": "When "
});
formatter.step({
  "line": 26,
  "name": "Save the booking and verify the same",
  "keyword": "Then "
});
formatter.examples({
  "line": 28,
  "name": "",
  "description": "",
  "id": "make-hotel-booking;save-booking---invalid-inputs;",
  "rows": [
    {
      "cells": [
        "fName",
        "sName",
        "deposit",
        "depositPaid",
        "checkin",
        "checkout"
      ],
      "line": 29,
      "id": "make-hotel-booking;save-booking---invalid-inputs;;1"
    },
    {
      "cells": [
        "Joe",
        "Adams",
        "0",
        "True",
        "2000-10-01",
        "2000-10-01"
      ],
      "line": 30,
      "id": "make-hotel-booking;save-booking---invalid-inputs;;2"
    },
    {
      "cells": [
        "Sam",
        "Pickle",
        "10.99",
        "False",
        "2028-02-29",
        "2018-10-01"
      ],
      "line": 31,
      "id": "make-hotel-booking;save-booking---invalid-inputs;;3"
    },
    {
      "cells": [
        "Adam",
        "Sandler",
        "99999999999.99",
        "True",
        "1900-02-29",
        "2088-10-01"
      ],
      "line": 32,
      "id": "make-hotel-booking;save-booking---invalid-inputs;;4"
    },
    {
      "cells": [
        "Mark",
        "Hu",
        "00.00",
        "False",
        "2019-02-29",
        "2018-10-01"
      ],
      "line": 33,
      "id": "make-hotel-booking;save-booking---invalid-inputs;;5"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 966136487,
  "status": "passed"
});
formatter.background({
  "line": 7,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 9,
  "name": "I am on the hotel Booking page",
  "keyword": "Given "
});
formatter.match({
  "location": "hotelBookingSteps.accessHomePage()"
});
formatter.result({
  "duration": 6346156925,
  "status": "passed"
});
formatter.scenario({
  "line": 30,
  "name": "Save Booking - Invalid Inputs",
  "description": "",
  "id": "make-hotel-booking;save-booking---invalid-inputs;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 25,
  "name": "I add booking details with Joe,Adams,0,True,2000-10-01 and 2000-10-01",
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4,
    5
  ],
  "keyword": "When "
});
formatter.step({
  "line": 26,
  "name": "Save the booking and verify the same",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Joe",
      "offset": 27
    },
    {
      "val": "Adams",
      "offset": 31
    },
    {
      "val": "0",
      "offset": 37
    },
    {
      "val": "True",
      "offset": 39
    },
    {
      "val": "2000-10-01",
      "offset": 44
    },
    {
      "val": "2000-10-01",
      "offset": 59
    }
  ],
  "location": "hotelBookingSteps.addBookingDetails(String,String,String,String,String,String)"
});
formatter.result({
  "duration": 505973367,
  "status": "passed"
});
formatter.match({
  "location": "hotelBookingSteps.saveAndVerifyBooking()"
});
formatter.result({
  "duration": 7276294049,
  "status": "passed"
});
formatter.after({
  "duration": 119209638,
  "status": "passed"
});
formatter.before({
  "duration": 906312903,
  "status": "passed"
});
formatter.background({
  "line": 7,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 9,
  "name": "I am on the hotel Booking page",
  "keyword": "Given "
});
formatter.match({
  "location": "hotelBookingSteps.accessHomePage()"
});
formatter.result({
  "duration": 4045771713,
  "status": "passed"
});
formatter.scenario({
  "line": 31,
  "name": "Save Booking - Invalid Inputs",
  "description": "",
  "id": "make-hotel-booking;save-booking---invalid-inputs;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 25,
  "name": "I add booking details with Sam,Pickle,10.99,False,2028-02-29 and 2018-10-01",
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4,
    5
  ],
  "keyword": "When "
});
formatter.step({
  "line": 26,
  "name": "Save the booking and verify the same",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Sam",
      "offset": 27
    },
    {
      "val": "Pickle",
      "offset": 31
    },
    {
      "val": "10.99",
      "offset": 38
    },
    {
      "val": "False",
      "offset": 44
    },
    {
      "val": "2028-02-29",
      "offset": 50
    },
    {
      "val": "2018-10-01",
      "offset": 65
    }
  ],
  "location": "hotelBookingSteps.addBookingDetails(String,String,String,String,String,String)"
});
formatter.result({
  "duration": 504642963,
  "status": "passed"
});
formatter.match({
  "location": "hotelBookingSteps.saveAndVerifyBooking()"
});
formatter.result({
  "duration": 7275885035,
  "status": "passed"
});
formatter.after({
  "duration": 165806953,
  "status": "passed"
});
formatter.before({
  "duration": 929608352,
  "status": "passed"
});
formatter.background({
  "line": 7,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 9,
  "name": "I am on the hotel Booking page",
  "keyword": "Given "
});
formatter.match({
  "location": "hotelBookingSteps.accessHomePage()"
});
formatter.result({
  "duration": 3796335969,
  "status": "passed"
});
formatter.scenario({
  "line": 32,
  "name": "Save Booking - Invalid Inputs",
  "description": "",
  "id": "make-hotel-booking;save-booking---invalid-inputs;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 25,
  "name": "I add booking details with Adam,Sandler,99999999999.99,True,1900-02-29 and 2088-10-01",
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4,
    5
  ],
  "keyword": "When "
});
formatter.step({
  "line": 26,
  "name": "Save the booking and verify the same",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Adam",
      "offset": 27
    },
    {
      "val": "Sandler",
      "offset": 32
    },
    {
      "val": "99999999999.99",
      "offset": 40
    },
    {
      "val": "True",
      "offset": 55
    },
    {
      "val": "1900-02-29",
      "offset": 60
    },
    {
      "val": "2088-10-01",
      "offset": 75
    }
  ],
  "location": "hotelBookingSteps.addBookingDetails(String,String,String,String,String,String)"
});
formatter.result({
  "duration": 550433971,
  "status": "passed"
});
formatter.match({
  "location": "hotelBookingSteps.saveAndVerifyBooking()"
});
formatter.result({
  "duration": 7305823537,
  "status": "passed"
});
formatter.after({
  "duration": 169065043,
  "status": "passed"
});
formatter.before({
  "duration": 912436396,
  "status": "passed"
});
formatter.background({
  "line": 7,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 9,
  "name": "I am on the hotel Booking page",
  "keyword": "Given "
});
formatter.match({
  "location": "hotelBookingSteps.accessHomePage()"
});
formatter.result({
  "duration": 4183278865,
  "status": "passed"
});
formatter.scenario({
  "line": 33,
  "name": "Save Booking - Invalid Inputs",
  "description": "",
  "id": "make-hotel-booking;save-booking---invalid-inputs;;5",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 25,
  "name": "I add booking details with Mark,Hu,00.00,False,2019-02-29 and 2018-10-01",
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4,
    5
  ],
  "keyword": "When "
});
formatter.step({
  "line": 26,
  "name": "Save the booking and verify the same",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Mark",
      "offset": 27
    },
    {
      "val": "Hu",
      "offset": 32
    },
    {
      "val": "00.00",
      "offset": 35
    },
    {
      "val": "False",
      "offset": 41
    },
    {
      "val": "2019-02-29",
      "offset": 47
    },
    {
      "val": "2018-10-01",
      "offset": 62
    }
  ],
  "location": "hotelBookingSteps.addBookingDetails(String,String,String,String,String,String)"
});
formatter.result({
  "duration": 523184324,
  "status": "passed"
});
formatter.match({
  "location": "hotelBookingSteps.saveAndVerifyBooking()"
});
formatter.result({
  "duration": 7320380346,
  "status": "passed"
});
formatter.after({
  "duration": 152281586,
  "status": "passed"
});
formatter.before({
  "duration": 909478955,
  "status": "passed"
});
formatter.background({
  "line": 7,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 9,
  "name": "I am on the hotel Booking page",
  "keyword": "Given "
});
formatter.match({
  "location": "hotelBookingSteps.accessHomePage()"
});
formatter.result({
  "duration": 4189218244,
  "status": "passed"
});
formatter.scenario({
  "line": 36,
  "name": "Delete First Booking on portal",
  "description": "",
  "id": "make-hotel-booking;delete-first-booking-on-portal",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 37,
  "name": "I am able to delete the bookings",
  "keyword": "Then "
});
formatter.match({
  "location": "hotelBookingSteps.iAmAbleToDeleteTheBookings()"
});
formatter.result({
  "duration": 79874079,
  "status": "passed"
});
formatter.after({
  "duration": 113670954,
  "status": "passed"
});
});