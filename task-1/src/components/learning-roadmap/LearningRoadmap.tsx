import React, { useState, useEffect, useLayoutEffect, useRef } from "react";
import { Check, Circle, User } from "lucide-react";

import { Toast } from "../toast/toast";
import CourseCertificate from "../certificate/certificate";

import "./LearningRoadmap.css";

interface ILesson {
  id: number;
  title: string;
  description: string;
  tag: string;
  link: string;
}

const LESSONS: ILesson[] = [
  {
    id: 1,
    title: "Introduction to Python",
    description: "Learn the basics of Python programming language",
    tag: "Introduction to python",
    link: "/courses/python-intro",
  },
  {
    id: 2,
    title: "Complete Tutorial: Learn Data Python from Scratch",
    description: "Master data manipulation and analysis with Python",
    tag: "Intermediate python",
    link: "/courses/python-data",
  },
  {
    id: 3,
    title: "How to Learn Python Step by step",
    description: "A comprehensive guide to learning Python efficiently",
    tag: "Introduction to python",
    link: "/courses/python-steps",
  },
  {
    id: 4,
    title: "Python Data Structures",
    description: "Learn about lists, dictionaries, sets, and tuples",
    tag: "Intermediate python",
    link: "/courses/python-data-structures",
  },
  {
    id: 5,
    title: "Advanced Python Concepts",
    description: "Dive into decorators, generators, and context managers",
    tag: "Advanced python",
    link: "/courses/advanced-python",
  },
];

type CertificateType = {
  name: string;
  course: string;
  date: string;
  isVisible: boolean;
};

const DUMMY_CERTIFICATE = {
  name: "Your Name",
  course: "Analytics Vidhya's Best AI Course",
  date: "ASAP",
  isVisible: false,
};

const LearningRoadmap: React.FC = () => {
  const [completedLessons, setCompletedLessons] = useState<number[]>([]);
  const [currentLesson, setCurrentLesson] = useState<number>(0);
  const [certificate, shouldShowCertificate] =
    useState<CertificateType>(DUMMY_CERTIFICATE);

  const [toast, setToast] = useState<{
    visible: boolean;
    lesson: ILesson | null;
  }>({
    visible: false,
    lesson: null,
  });

  const nodeRefs = useRef<(HTMLDivElement | null)[]>([]);
  const avatarRef = useRef<HTMLDivElement | null>(null);
  const pathLineRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    nodeRefs.current = nodeRefs.current.slice(0, LESSONS.length);
  }, []);

  useEffect(() => {
    const savedProgress = localStorage.getItem("learningProgress");
    if (savedProgress) {
      try {
        const progress = JSON.parse(savedProgress);
        setCompletedLessons(progress.completed || []);
        setCurrentLesson(progress.current || 1);
      } catch (e) {
        console.error("Error parsing saved progress:", e);

        localStorage.removeItem("learningProgress");
      }
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(
      "learningProgress",
      JSON.stringify({
        completed: completedLessons,
        current: currentLesson,
      })
    );
  }, [completedLessons, currentLesson]);

  useEffect(() => {
    if (avatarRef.current && nodeRefs.current[currentLesson - 1]) {
      const nodePosition =
        nodeRefs.current[currentLesson - 1]?.getBoundingClientRect();

      if (nodePosition) {
        const topPosition = nodePosition.top + window.scrollY;
        avatarRef.current.style.top = `${topPosition}px`;
      }
    }
  }, [currentLesson]);

  useEffect(() => {
    // dividing by 4 because we need 4 colors
    const progress = (completedLessons.length / LESSONS.length) * 100;
    const quadrant = progress / 4;
    const complement = 100 - progress;

    if (pathLineRef.current && progress)
      pathLineRef.current.style.setProperty(
        "background",
        `linear-gradient(to bottom, 
        #ff0000 ${quadrant}%, 
        #ec4899 ${quadrant * 2}%, 
        #6b21a8 ${quadrant * 3}%,
        #1e3a8a ${quadrant * 4}%,
        #3a3a3a ${complement}%
      )`
      );

    if (completedLessons.length === LESSONS.length) {
      shouldShowCertificate({
        isVisible: true,
        name: "Anup Verma",
        course: "Python Bootcamp : Zero to Master",
        date: new Date().toLocaleDateString(),
      });

      document.documentElement.scrollIntoView({ behavior: "smooth" });
    }
  }, [completedLessons]);

  useLayoutEffect(() => {
    const handleResize = () => {
      if (avatarRef.current && nodeRefs.current[currentLesson - 1]) {
        const nodePosition =
          nodeRefs.current[currentLesson - 1]?.getBoundingClientRect();

        if (nodePosition) {
          const topPosition = nodePosition.top + window.scrollY;
          avatarRef.current.style.top = `${topPosition}px`;
        }
      }
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("load", handleResize);

    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("load", handleResize);
    };
  }, [currentLesson]);

  useEffect(() => {
    if (toast.visible) {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);

      timeoutRef.current = setTimeout(() => {
        setToast({ visible: false, lesson: null });
      }, 3000);
    }
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [toast.visible]);

  const handleLessonClick = (lesson: ILesson) => {
    if (completedLessons.includes(lesson.id) || lesson.id === currentLesson) {
      setToast({ visible: true, lesson });

      if (
        lesson.id === currentLesson &&
        !completedLessons.includes(lesson.id)
      ) {
        setCompletedLessons((prev) => [...prev, lesson.id]);
        setCurrentLesson(lesson.id + 1);
      }

      console.log("completedLesson : ", completedLessons, lesson.id);
    }
  };

  return (
    <div className="roadmap-container">
      <div className="roadmap-title-wrapper">
        <h1 className="roadmap-title">Your Python Learning Journey</h1>
        <section
          className="view-certificate"
          onClick={() =>
            shouldShowCertificate((prev) => ({
              ...DUMMY_CERTIFICATE,
              isVisible: !prev.isVisible,
            }))
          }
        >
          <span className="dummy-certificate">View Certificate</span>
        </section>
      </div>

      <div className="roadmap-path">
        <div className="path-line" ref={pathLineRef}></div>

        <div className="avatar" ref={avatarRef}>
          <User className="avatar-icon" />
        </div>

        <div className="lesson-nodes">
          {LESSONS.map((lesson, index) => {
            const isCompleted = completedLessons.includes(lesson.id);
            const isActive = lesson.id === currentLesson;

            return (
              <div
                key={lesson.id}
                className="lesson-node"
                ref={(el) => (nodeRefs.current[index] = el)}
              >
                <div className="node-content">
                  <span className="lesson-tag">{lesson.tag}</span>
                  <h3 className="lesson-title">{lesson.title}</h3>
                  <p className="lesson-description">{lesson.description}</p>
                </div>

                <div
                  className={`node-circle ${isCompleted ? "completed" : ""} ${
                    isActive ? "active" : ""
                  }`}
                  onClick={() => handleLessonClick(lesson)}
                  role="button"
                  aria-label={`Lesson ${lesson.id}: ${lesson.title}`}
                  tabIndex={0}
                >
                  {isCompleted ? (
                    <Check className="node-icon completed" />
                  ) : (
                    <Circle className="node-icon" />
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {certificate.isVisible && (
        <CourseCertificate
          onOverlayClick={() =>
            shouldShowCertificate((prev) => ({
              ...prev,
              isVisible: false,
            }))
          }
          name={certificate.name}
          course={certificate.course}
          date={certificate.date}
        />
      )}

      <Toast isVisible={toast.visible} lessonData={toast.lesson} />
    </div>
  );
};

export default LearningRoadmap;
