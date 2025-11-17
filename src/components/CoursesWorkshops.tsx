import { Button } from "@/components/ui/button";
import { Clock, BookOpen, Award, MapPin, Calendar } from "lucide-react";
const courses = [{
  tag: "RAI · Foundation",
  title: "Responsible AI Essentials",
  meta: "3 hours · 6 modules · Certificate",
  outcomes: ["Understand AI risks and principles", "Recognize high-risk AI use cases", "Apply RAI frameworks to real scenarios"]
}, {
  tag: "Compliance · ISO 42001",
  title: "AI Management System",
  meta: "4 hours · 8 modules · Certificate",
  outcomes: ["Navigate ISO 42001 requirements", "Build governance structures", "Implement compliance workflows"]
}, {
  tag: "Technical · LLMs",
  title: "Building with LLMs",
  meta: "5 hours · 10 modules · Certificate",
  outcomes: ["Prompt engineering techniques", "Security and data privacy", "Production deployment strategies"]
}];
const workshops = [{
  title: "Leaders Workshop",
  subtitle: "Design your organization's AI strategy & governance",
  format: "Virtual / Onsite",
  duration: "4 hrs / 1 day"
}, {
  title: "Managers Workshop",
  subtitle: "Implement guardrails and responsible AI practices",
  format: "Virtual / Onsite",
  duration: "3 hrs / Half day"
}, {
  title: "Technical Workshop",
  subtitle: "Hands-on AI implementation and security best practices",
  format: "Virtual / Onsite",
  duration: "6 hrs / 1 day"
}];
const CoursesWorkshops = () => {
  return <section id="learning" className="py-20 md:py-32 bg-soft-gray">
      <div className="mx-auto max-w-7xl px-6 space-y-20">
        {/* Courses Section */}
        <div className="space-y-12">
          <div className="flex items-end justify-between">
            <h2 className="text-3xl md:text-4xl font-semibold text-foreground">
              Courses that raise AI literacy fast
            </h2>
            <a href="#courses" className="hidden md:inline-flex text-sm font-medium text-primary hover:underline">
              View all courses →
            </a>
          </div>

          {/* Courses Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {courses.map((course, index) => <div key={index} className="bg-card rounded-2xl p-6 border border-border hover:border-primary transition-smooth hover:shadow-lg">
                {/* Tag */}
                <div className="inline-block px-3 py-1 rounded-full bg-accent-light text-primary text-xs font-medium mb-4">
                  {course.tag}
                </div>

                {/* Title & Meta */}
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  {course.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  {course.meta}
                </p>

                {/* Outcomes */}
                <ul className="space-y-2 mb-6">
                  {course.outcomes.map((outcome, i) => <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <span className="text-primary mt-0.5">•</span>
                      <span>{outcome}</span>
                    </li>)}
                </ul>

                {/* CTA */}
                <Button variant="ghost" size="sm" className="w-full">
                  View syllabus
                </Button>
              </div>)}
          </div>
        </div>

        {/* Workshops Section */}
        
      </div>
    </section>;
};
export default CoursesWorkshops;