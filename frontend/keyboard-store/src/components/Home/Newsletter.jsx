import "../../styles/HomePage.css"

function Newsletter() {
    return (
      <div className="newsletterSection">
        <h2>NEWSLETTER</h2>
        <h4>Subscribe and get 20% off your first purchase.</h4>
        <form>
          <input type="email" placeholder="Your Email" />
          <input class="button" type="submit" value={"Send"} />
        </form>
      </div>
    );
  }

  export default Newsletter;