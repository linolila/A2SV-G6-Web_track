import AuthForm from "../components/AuthForm";

export default function SignUpPage() {
  const handleSubmit = (data: Record<string, string>) => {
  
    console.log("Signup data:", data);
  };

  return <AuthForm isSignup onSubmit={handleSubmit} />;
}
