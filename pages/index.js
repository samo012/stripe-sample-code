import React from "react";
import { loadStripe } from "@stripe/stripe-js";
import Link from "next/link";
import { useRouter } from "next/router";

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
);
export default function PreviewPage() {
  const router = useRouter();
  React.useEffect(() => {
    // Check to see if this is a redirect back from Checkout
    const query = new URLSearchParams(window.location.search);
    if (query.get("success")) {
      console.log("Order placed! You will receive an email confirmation.");
      // navigate to the confirmation page
      router.push("/confirmation");
    }

    if (query.get("canceled")) {
      console.log(
        "Order canceled -- continue to shop around and checkout when you’re ready."
      );
      router.push("/confirmation");
    }
  }, []);

  const styles = {
    container: {
      fontFamily: "Arial, sans-serif",
      backgroundColor: "#f4f4f4",
      padding: "20px",
    },
    header: {
      backgroundColor: "#0070f3",
      padding: "10px 20px",
      color: "white",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
    },
    title: {
      margin: 0,
    },
    navLink: {
      color: "white",
      textDecoration: "none",
      margin: "0 10px",
    },
    main: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      marginTop: "20px",
    },
    subtitle: {
      textAlign: "center",
      marginBottom: "20px",
    },
    ticketList: {
      display: "flex",
      justifyContent: "space-around",
    },
    ticketItem: {
      backgroundColor: "white",
      padding: "15px",
      borderRadius: "8px",
      boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
      width: "30%",
      textAlign: "center",
    },
    ticketTitle: {
      margin: "10px 0",
    },
    ticketDescription: {
      margin: "5px 0",
    },
    ticketPrice: {
      margin: "10px 0",
      fontWeight: "bold",
    },
    checkoutContainer: {
      textAlign: "center",
      marginTop: "30px",
      width: "200px",
    },
    checkoutButton: {
      backgroundColor: "#0070f3",
      color: "white",
      padding: "10px 20px",
      borderRadius: "5px",
      textDecoration: "none",
      transition: "background-color 0.3s ease",
      width: "200px",
    },
    checkoutButtonHover: {
      backgroundColor: "#005bb5",
    },
    footer: {
      marginTop: "50px",
      textAlign: "center",
      color: "#777",
    },
  };

  return (
    <div>
      <div style={styles.container}>
        <header style={styles.header}>
          <h1 style={styles.title}>Concert Tickets</h1>
          <nav>
            {/* <Link style={styles.navLink} href="/">
              Home
            </Link> */}
            <Link style={styles.navLink} href="/events">
              Events
            </Link>
            {/* <Link style={styles.navLink} href="/contact">
              Contact
            </Link> */}
          </nav>
        </header>

        <main style={styles.main}>
          <h2 style={styles.subtitle}>Yea I made this as a joke</h2>
          <h3>So what?</h3>
          <div style={styles.checkoutContainer}>
            <form action="/api/checkout_sessions" method="POST">
              <button style={styles.checkoutButton} type="submit" role="link">
                Buy ur expensive ticket
              </button>
            </form>
          </div>
        </main>

        <footer style={styles.footer}>
          <p>&copy; 2024 Ticket Sales. All rights reserved.</p>
        </footer>
      </div>
      <style jsx>
        {`
          section {
            background: #ffffff;
            display: flex;
            flex-direction: column;
            width: 400px;
            height: 112px;
            border-radius: 6px;
            justify-content: space-between;
          }
          button {
            height: 36px;
            width: 200px;
            background: #556cd6;
            border-radius: 4px;
            color: white;
            border: 0;
            font-weight: 600;
            cursor: pointer;
            transition: all 0.2s ease;
            box-shadow: 0px 4px 5.5px 0px rgba(0, 0, 0, 0.07);
          }
          button:hover {
            opacity: 0.8;
          }
        `}
      </style>
    </div>
  );
}
