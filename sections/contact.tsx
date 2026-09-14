import { useForm } from 'react-hook-form';
import FormInput from '@/components/form-input';
import FormButton from '@/components/form-button';
import { FaEnvelope } from 'react-icons/fa';

export default function Contact() {
  const { 
    register, 
    handleSubmit, 
    formState: { errors, isSubmitting } 
  } = useForm({
    mode: 'onChange',
    defaultValues: {
      name: '',
      email: '',
      message: '',
    }
  });

  const onSubmit = (data: any) => {
    // In a real app, this would submit to Formspree or EmailJS
    // For now, we'll simulate success
    alert('Thank you for your message! I will get back to you soon.');
    console.log('Form data:', data);
  };

  return (
    <section id="contact" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">
          Get In Touch
        </h2>
        <div className="grid gap-8 md:grid-cols-2">
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
            <p className="text-muted-foreground mb-6">
              Feel free to reach out for collaboration opportunities, 
              questions, or just to say hello!
            </p>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <FaEnvelope className="h-5 w-5 text-primary mt-0.5" />
                <div>
                  <p className="font-medium">abhinav@email.com</p>
                  <p className="text-sm text-muted-foreground">
                    Professional inquiries
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <FaEnvelope className="h-5 w-5 text-primary mt-0.5" />
                <div>
                  <p className="font-medium">linkedin.com/in/abhinav</p>
                  <p className="text-sm text-muted-foreground">
                    Connect on LinkedIn
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <FaEnvelope className="h-5 w-5 text-primary mt-0.5" />
                <div>
                  <p className="font-medium">github.com/abhinavpadige4</p>
                  <p className="text-sm text-muted-foreground">
                    View my projects
                  </p>
                </div>
              </div>
            </div>
          </div>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid gap-4 md:grid-cols-2">
              <FormInput
                name="name"
                label="Full Name"
                placeholder="Enter your full name"
                required
              />
              <FormInput
                name="email"
                label="Email Address"
                type="email"
                placeholder="Enter your email"
                required
              />
            </div>
            <FormInput
              name="message"
              label="Message"
              placeholder="Enter your message"
              required
            />
            <div className="flex justify-end">
              <FormButton 
                type="submit" 
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </FormButton>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}