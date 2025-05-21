import { ButtonComponent } from "@syncfusion/ej2-react-buttons";
import { Link, useNavigate } from "react-router";

const HomeLayout = () => {
  const navigate = useNavigate();

  const goToDashboard = async () => {
    navigate("/dashboard");
  };

  return (
    <main className="auth">
      <section className="size-full glassmorphism flex-center px-6">
        <div className="sign-in-card">
          <header className="header">
            <Link to="/">
              <img
                src="/assets/icons/logo.svg"
                alt="Logo"
                className="size-[30px]"
              />
            </Link>
            <h1 className="p-28-bold text-dark-100">Tourvisto</h1>
          </header>
          <article>
            <h2 className="p-28-semibold text-dark-100 text-center">
              Start Your Travel Journey
            </h2>
            <p className="p-18-regular text-center text-red-100 !leading-7">
              Note: Only admins have access to this dashboard
            </p>
          </article>
          <ButtonComponent
            iconCss="e-search-icon"
            className="button-class !h-11 !w-full"
            onClick={goToDashboard}
          >
            <span className="p-18-semibold text-white">
              Go to Admin Dashboard
            </span>
          </ButtonComponent>
        </div>
      </section>
    </main>
  );
};

export default HomeLayout;
