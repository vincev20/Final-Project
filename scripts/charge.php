<?
// Set your secret key: remember to change this to your live secret key in production
// See your keys here: https://dashboard.stripe.com/account/apikeys
\Stripe\Stripe::setApiKey("sk_test_KAlWlIyR6xWsncSYLU3Xtjef");

// Get the credit card details submitted by the form
$token = $_POST['stripeToken'];

// Create a charge: this will charge the user's card
try {
  $charge = \Stripe\Charge::create(array(
    "amount" => 10, // Amount in cents
    "currency" => "sgd",
    "source" => $token,
    "description" => "Example charge for Laces"
    ));
} catch(\Stripe\Error\Card $e) {
  // The card has been declined
}


?>