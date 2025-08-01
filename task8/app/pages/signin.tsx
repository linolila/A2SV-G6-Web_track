import AuthForm from "../components/AuthForm";

export default function SignInPage() {
  const handleSubmit = (data: Record<string, string>) => {
 
    console.log("Sign in data:", data);
  };

  return <AuthForm onSubmit={handleSubmit} />;
}
