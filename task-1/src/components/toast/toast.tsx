import React from "react";
import { BookOpen } from "lucide-react";

import "./toast.css";

interface ILesson {
  link: string;
  title: string;
}

interface IToastProps {
  isVisible: boolean;
  lessonData: ILesson | null;
  // isFinalCourseCompleted: boolean;
}

export const Toast: React.FC<IToastProps> = (props) => {
  const { isVisible, lessonData } = props;

  const navigateToLesson = (link: string) => {
    console.log(`Navigating to: ${link}`);
    window.alert(`Navigating to: ${link}`);
  };

  if (!(isVisible && lessonData)) return null;

  return (
    <div className="toast" role="alert">
      <BookOpen className="toast-icon" />
      <div className="toast-content">
        <div className="toast-title">{lessonData.title}</div>
        <div className="toast-message">Ready to start this lesson?</div>
      </div>
      <button
        className="toast-button"
        onClick={() => navigateToLesson(lessonData.link || "")}
      >
        Go to lesson
      </button>
    </div>
  );
};
