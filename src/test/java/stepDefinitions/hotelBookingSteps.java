package stepDefinitions;


import bookingEngine.hotelBooking;


import cucumber.api.PendingException;
import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

import org.junit.Assert;

import org.junit.BeforeClass;
import org.openqa.selenium.WebDriver;


public class hotelBookingSteps {

WebDriver driver;

    hotelBooking hb = new hotelBooking();



    @Before
    public void setup(){

        hb.setup();
    }

    @After
    public void teardown(){

        hb.closeBrowser();
    }


    @Given("^I am on the hotel Booking page$")
    public void accessHomePage() throws InterruptedException {
        hb.openBookingpage("http://hotel-test.equalexperts.io/");

    }

    @When("^I add booking details with (.*),(.*),(.*),(.*),(.*) and (.*)$")
    public void addBookingDetails(String fName, String sName, String amount, String depositPaid, String checkinDate, String checkoutDate){
        hb.setFirstname(fName);
        hb.setLastName(sName);
        hb.setPrice(amount);
        hb.setDepositpaid(depositPaid);
        hb.setCheckIn(checkinDate);
        hb.setCheckOut(checkoutDate);

    }

    @Then("^Save the booking and verify the same$")
    public void saveAndVerifyBooking() throws InterruptedException {
        boolean bookingsaved = false;
        //Get the Count before saving new Booking
        int currentBookingCount = hb.getBookingsCount();
        //Save the Booking
        hb.saveBooking();
        // Wait introduced as the web is slow to update the bookking
        Thread.sleep(7000);
        //Get the Count after saving new Booking
        int newBookingCount = hb.getBookingsCount();

        if (newBookingCount>currentBookingCount){
            bookingsaved = true;
        }
        //Asserting if the booking was saved.
        Assert.assertTrue(bookingsaved);




    }

    @Then("^I am able to delete the bookings$")
    public void iAmAbleToDeleteTheBookings()  {
        hb.deleteBooking();

    }
}
