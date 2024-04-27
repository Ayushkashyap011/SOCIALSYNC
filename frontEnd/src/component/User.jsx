//   // Function to handle login button click
function User ()
{  
const handleLoginClick = () => {
    // Navigate to the login page
    history.push('/user/login');
  };

  // Function to handle register button click
  const handleRegisterClick = () => {
    // Navigate to the register page
    history.push('/user/register');
  };

  return (
    <div className="main-container">
      {/* Video background */}
      <div className="video-container">
        <video autoPlay loop muted className="video">
          <source src="your-video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Content */}
      <div className="content-container">
        <div className="content">
          <h1 className="main-text">Welcome</h1>
          <div className="button-container">
            {/* Login button */}
            <button onClick={handleLoginClick} className="button">Login</button>
            {/* Register button */}
            <button onClick={handleRegisterClick} className="button">Register</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default User;