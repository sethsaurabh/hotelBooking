package bookingEngine;


import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.remote.DesiredCapabilities;
import org.openqa.selenium.support.ui.Select;
import java.util.List;

public class hotelBooking {

    WebDriver driver ;
    Integer bookingsCount;


    private static WebElement element = null;

    public hotelBooking(){

    }

   public void setFirstname(String firstName){
        firstName(driver).sendKeys(firstName);
   }

   public void setLastName(String lastName){
       lasttName(driver).sendKeys(lastName);
   }

   public void setPrice(String price){
       price(driver).sendKeys(price);
   }

   public void setup(){
       String path = System.getProperty("user.dir");
       System.out.println(path);
       DesiredCapabilities cap = new DesiredCapabilities();
       System.setProperty("webdriver.chrome.driver", path+"/libs/chromedriver5");
       driver = new ChromeDriver(cap);
   }

    public void openBookingpage(String url) throws InterruptedException {

       driver.get(url);
       Thread.sleep(2000); // Wait is required to allow bookings to load.
    }

    public void setCheckIn(String checkinDate){
        checkin(driver).sendKeys(checkinDate);
    }

    public void setCheckOut(String checkOutDate){
        checkout(driver).sendKeys(checkOutDate);
    }

    public void setDepositpaid(String depositpaid){
        if (depositpaid.equalsIgnoreCase("true"))
            {depositPaidSelection(driver).selectByIndex(0);}
        else {depositPaidSelection(driver).selectByIndex(1);}
    }

    public void saveBooking(){
        getsaveBookingBtn(driver).click();
    }

    public void deleteBooking(){
        getdeleteBookingBtn(driver).click();
    }

    public void closeBrowser(){
        driver.close();
        driver.quit();
    }

    public int getBookingsCount(){
        bookingsCount = 0;
        List<WebElement> someElements = driver.findElements(By.cssSelector("input"));
        for (WebElement anElement : someElements) {
            if (anElement.getAttribute("type").equals("button") && anElement.getAttribute("Value").contains("Delete")) {
                bookingsCount++;
            }
        }

        return bookingsCount;
    }

    public static WebElement firstName(WebDriver driver){
        element = driver.findElement(By.id("firstname"));
        return element;

    }



    public static WebElement lasttName(WebDriver driver){
        element = driver.findElement(By.id("lastname"));
        return element;

    }

    public static WebElement price(WebDriver driver){
        element = driver.findElement(By.id("totalprice"));
        return element;

    }

    public static Select depositPaidSelection(WebDriver driver){
        Select deposit = new Select(driver.findElement(By.id("depositpaid")));
        return deposit;

    }

    public static WebElement checkin(WebDriver driver){
        element = driver.findElement(By.id("checkin"));
        return element;

    }

    public static WebElement checkout(WebDriver driver){
        element = driver.findElement(By.id("checkout"));
        return element;

    }

    public static WebElement getsaveBookingBtn(WebDriver driver){
        List<WebElement> someElements = driver.findElements(By.cssSelector("input"));
        System.out.println(someElements.size());
        // Now iterate through them and check for our desired match
        for (WebElement anElement : someElements) {
            if (anElement.getAttribute("type").equals("button") && anElement.getAttribute("Value").contains("Save")) {
                return anElement;
            }
        }
        return null;
    }

    public static WebElement getdeleteBookingBtn(WebDriver driver){
        List<WebElement> someElements = driver.findElements(By.cssSelector("input"));

        // Now iterate through them and check for our desired match
        for (WebElement anElement : someElements) {
            if (anElement.getAttribute("type").equals("button") && anElement.getAttribute("Value").contains("Delete")) {
                return anElement;

            }

        }
        return null;
    }

}

