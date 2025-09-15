import { cn } from "@/lib/utils";
import {
  Video,
  FileText,
  Clock,
  Stethoscope,
  ShieldCheck,
  Users,
  Smartphone,
  Activity,
} from "lucide-react";
export function Features() {
  const features = [
    {
      title: "Online Consultations",
      description:
        "Connect with certified doctors anytime, anywhere through secure video consultations.",
      icon: <Video className="h-8 w-8" />,
    },
    {
      title: "Prescription Analysis",
      description:
        "Upload prescriptions for instant AI-powered analysis and doctor validation.",
      icon: <FileText className="h-8 w-8" />,
    },
    {
      title: "24/7 Medical Support",
      description:
        "Access round-the-clock guidance for your healthcare needs, no waiting in queues.",
      icon: <Clock className="h-8 w-8" />,
    },
    {
      title: "Trusted Experts",
      description:
        "Consult only with verified, experienced, and licensed medical professionals.",
      icon: <Stethoscope className="h-8 w-8" />,
    },
    {
      title: "Health Records",
      description:
        "Maintain all your prescriptions, reports, and medical history in one secure place.",
      icon: <ShieldCheck className="h-8 w-8" />,
    },
    {
      title: "Patient Community",
      description:
        "Join a supportive community of patients and doctors for shared learning and advice.",
      icon: <Users className="h-8 w-8" />,
    },
    {
      title: "Smart Reminders",
      description:
        "Never miss a dose or an appointment with automated reminders on your device.",
      icon: <Smartphone className="h-8 w-8" />,
    },
    {
      title: "Wellness Insights",
      description:
        "Get AI-driven health insights and preventive care tips tailored for you.",
      icon: <Activity className="h-8 w-8" />,
    },
  ];
  return (
    <div
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  relative z-10 py-10 max-w-7xl mx-auto">
      {features.map((feature, index) => (
        <Feature key={feature.title} {...feature} index={index} />
      ))}
    </div>
  );
}

const Feature = ({
  title,
  description,
  icon,
  index
}) => {
  return (
    <div
      className={cn(
        "flex flex-col lg:border-r  py-10 relative group/feature dark:border-neutral-800",
        (index === 0 || index === 4) && "lg:border-l dark:border-neutral-800",
        index < 4 && "lg:border-b dark:border-neutral-800"
      )}>
      {index < 4 && (
        <div
          className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      {index >= 4 && (
        <div
          className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      <div
        className="mb-4 relative z-10 px-10 text-neutral-600 dark:text-neutral-400">
        {icon}
      </div>
      <div className="text-lg font-bold mb-2 relative z-10 px-10">
        <div
          className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-300 dark:bg-neutral-700 group-hover/feature:bg-blue-500 transition-all duration-200 origin-center" />
        <span
          className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-neutral-800 dark:text-neutral-100">
          {title}
        </span>
      </div>
      <p
        className="text-sm text-neutral-600 dark:text-neutral-300 max-w-xs relative z-10 px-10">
        {description}
      </p>
    </div>
  );
};
