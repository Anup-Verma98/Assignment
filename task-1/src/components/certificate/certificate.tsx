import React from "react";

import "./certificate.css";

interface ICourseCertificate {
  name: string;
  course: string;
  date: string;
  onOverlayClick: () => void | Function;
}

const CourseCertificate: React.FC<ICourseCertificate> = ({
  onOverlayClick,
  name,
  course,
  date,
}) => {
  return (
    <div className="course-completion-overlay" onClick={onOverlayClick}>
      <div className="course-completion-container">
        <section className="brand">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="167"
            height="48"
            viewBox="0 0 167 48"
            fill="none"
          >
            <path
              d="M63.3665 19.5997H60.2998L67.1665 3.33301H70.3665L77.3665 19.5997H74.1331L72.2998 15.1663H66.9331L67.9665 12.533H71.2331L68.6998 6.43301L63.3665 19.5997Z"
              fill="black"
            ></path>
            <path
              d="M79.3335 19.6002V7.7002H81.6335L82.0002 9.43353C83.1335 8.26686 84.4002 7.7002 85.8668 7.7002C88.6668 7.7002 90.0668 9.16686 90.0668 12.1002V19.6002H87.1002V12.1002C87.1002 10.8002 86.4668 10.1335 85.1668 10.1335C84.2002 10.1335 83.2668 10.5335 82.3335 11.3002V19.6002H79.3335ZM98.0002 7.7002C101.433 7.7002 103.167 9.0002 103.167 11.6335V19.6335H101.467L100.433 18.5669C99.4335 19.2669 98.3002 19.6335 97.1002 19.6335C94.2668 19.6335 92.8668 18.4002 92.8668 15.9335C92.8668 13.5669 94.5335 12.4002 97.9002 12.4002C98.7002 12.4002 99.4668 12.4669 100.267 12.6335V11.6669C100.267 10.6002 99.5335 10.0669 98.0335 10.0669C96.7668 10.0669 95.3668 10.2669 93.8335 10.6335V8.26686C95.3335 7.90019 96.7335 7.7002 98.0002 7.7002ZM97.8668 14.4002C96.4668 14.4002 95.7668 14.9002 95.7668 15.8669C95.7668 16.9335 96.3668 17.4669 97.5335 17.4669C98.5002 17.4669 99.4002 17.1669 100.234 16.5335V14.6335C99.5668 14.5002 98.8668 14.4335 98.1335 14.4002H97.8668Z"
              fill="black"
            ></path>
            <path
              d="M109.9 3.33301V19.5997H106.733V3.33301H109.9Z"
              fill="black"
            ></path>
            <path
              d="M111.5 7.7002H114.7L117.7 16.1669L120.633 7.7002H123.767L118.8 19.8002C117.933 21.9335 116.5 23.4669 114.567 24.3669L113.1 22.3335C114.433 21.7669 115.4 20.8335 116 19.5335L111.5 7.7002ZM125.367 5.7002H127.533L127.967 7.63353H130.9V10.0335H128.333V15.5335C128.333 16.6335 128.8 17.2002 129.733 17.2002H130.933V19.6002H128.3C126.333 19.6002 125.367 18.5335 125.367 16.3669V5.7002Z"
              fill="black"
            ></path>
            <path
              d="M134.9 6.53301C135.783 6.53301 136.5 5.81666 136.5 4.93301C136.5 4.04935 135.783 3.33301 134.9 3.33301C134.016 3.33301 133.3 4.04935 133.3 4.93301C133.3 5.81666 134.016 6.53301 134.9 6.53301Z"
              fill="black"
            ></path>
            <path
              d="M136.5 7.7002V19.6002H133.333V7.7002H136.5Z"
              fill="black"
            ></path>
            <path
              d="M148.4 19.2669C147.4 19.5002 146.367 19.6002 145.3 19.6002C141.033 19.6002 138.867 17.5335 138.867 13.4335C138.867 9.60019 141 7.7002 145.3 7.7002C146.367 7.7002 147.4 7.8002 148.4 8.03353V10.4002C147.4 10.1669 146.433 10.0669 145.533 10.0669C143.133 10.0669 141.933 11.1669 141.933 13.4002C141.933 15.9335 143.133 17.2002 145.533 17.2002C146.467 17.2002 147.4 17.1002 148.4 16.8669V19.2669ZM150.933 18.9335V16.5002C152.233 17.0335 153.733 17.2669 155.433 17.2669C156.7 17.2669 157.333 16.8669 157.333 16.0335C157.333 15.2669 156.9 14.8669 156.067 14.8669H153.933C151.567 14.8669 150.367 13.7002 150.367 11.3669C150.367 8.93353 152.1 7.7002 155.567 7.7002C157.033 7.7002 158.433 7.93353 159.733 8.36686V10.8002C158.433 10.2669 157.033 10.0335 155.5 10.0335C153.9 10.0335 153.1 10.4335 153.1 11.2669C153.1 12.0335 153.567 12.4335 154.5 12.4335H156.4C159 12.4335 160.3 13.6002 160.3 15.9335C160.3 18.3669 158.633 19.6002 155.333 19.6002C153.7 19.6002 152.233 19.3669 150.933 18.9335Z"
              fill="black"
            ></path>
            <path
              d="M77.2684 23.9688L70.2351 40.0688H67.0351L60.3018 23.9688H63.8351L68.8018 36.3021L73.7684 23.9688H77.2684Z"
              fill="black"
            ></path>
            <path
              d="M82.1353 28.2354V40.0687H79.1353V28.2354H82.1353Z"
              fill="black"
            ></path>
            <path
              d="M95.8351 23.9688V39.3688C94.0351 39.8354 92.2684 40.0688 90.5351 40.0688C86.7351 40.0688 84.8018 38.0354 84.8018 33.9354C84.8018 30.1688 86.6684 28.2688 90.4018 28.2688C91.2018 28.2688 92.0018 28.4688 92.8351 28.8354V23.9688H95.8351ZM90.5351 30.7354C88.6684 30.7354 87.7684 31.7688 87.7684 33.8688C87.7684 36.3354 88.7351 37.5688 90.6684 37.5688C91.4351 37.5688 92.1684 37.4688 92.8684 37.2354V31.3354C92.2351 30.9354 91.4684 30.7354 90.5351 30.7354ZM99.1018 40.0688V23.9688H102.068V29.7688C103.002 28.7688 104.168 28.2688 105.635 28.2688C108.435 28.2688 109.835 29.7354 109.835 32.6354V40.1021H106.868V32.6021C106.868 31.3021 106.235 30.6354 104.935 30.6354C103.968 30.6354 103.035 31.0354 102.102 31.8021V40.0688H99.1018ZM111.702 28.2354H114.868L117.835 36.7354L120.735 28.2354H123.835L118.935 40.4021C118.068 42.5354 116.668 44.0688 114.768 44.9688L113.335 42.9354C114.635 42.3688 115.602 41.4021 116.202 40.1021L111.702 28.2354ZM130.402 28.2354C133.902 28.2354 135.668 29.5354 135.668 32.1354V40.0688H133.935L132.868 39.0021C131.835 39.7021 130.702 40.0688 129.468 40.0688C126.602 40.0688 125.135 38.8354 125.135 36.4021C125.135 34.0688 126.835 32.8688 130.268 32.8688C131.068 32.8688 131.868 32.9354 132.668 33.1021V32.2021C132.668 31.1354 131.902 30.6021 130.402 30.6021C129.102 30.6021 127.668 30.8021 126.102 31.1688V28.8021C127.668 28.4354 129.102 28.2354 130.402 28.2354ZM130.268 34.9021C128.835 34.9021 128.135 35.4021 128.135 36.3688C128.135 37.4354 128.735 37.9354 129.935 37.9354C130.935 37.9354 131.835 37.6354 132.702 37.0021V35.1021C131.935 34.9688 131.102 34.9021 130.268 34.9021Z"
              fill="black"
            ></path>
            <path
              d="M49.6001 3.59999C50.3667 3.99999 50.6001 4.76666 50.6667 5.06666V5.09999C50.7001 5.23332 50.7334 5.36666 50.7334 5.49999L52.3001 14.2C52.3334 14.3 52.3334 14.4333 52.3001 14.5333C52.3001 14.5667 52.3001 14.6 52.3001 14.6333C52.3001 15.4 51.6667 16.0333 50.9001 16.0333C50.2334 16.0333 49.7001 15.6 49.5667 14.9667L48.2667 8.86666C48.2667 8.86666 44.7667 14.9667 40.9334 21.6333L40.7001 22.0667L40.4667 22.5C40.4334 22.5667 40.4001 22.6333 40.3334 22.7L40.0667 23.1333L39.3001 24.4333L39.1667 24.6333L38.9334 25.0333C38.8667 25.1667 38.7667 25.3 38.7001 25.4333L38.4667 25.8333C38.2667 26.1667 38.1001 26.4667 37.9001 26.8L37.6667 27.2C34.3667 32.9 31.4667 37.9 30.9334 38.6667C30.5334 39.4 29.7334 39.8667 28.8667 39.8667C28.0334 39.8667 27.2667 39.4333 26.8667 38.7667C26.8334 38.7333 26.8334 38.7333 26.8001 38.7C26.6001 38.4 26.3667 38.0667 26.1001 37.6667L25.8001 37.2C24.9001 35.8333 23.7667 34.1333 22.6001 32.4L22.2667 31.9C20.8001 29.7 19.3334 27.5 18.3334 26L18.2001 25.7667C17.6001 24.8667 17.1667 24.2333 17.0667 24.1C17.0334 24.0667 16.9001 23.9333 16.7001 23.9H16.6334C16.5667 23.9 16.3001 23.9333 16.1334 24.2333C15.5334 25.3667 14.1667 28.1 12.7334 30.9L12.5334 31.3C12.2334 31.8667 11.9667 32.4333 11.7001 32.9667L11.5667 33.2333C9.9334 36.4333 8.5334 39.2667 8.4334 39.3333C8.2334 39.6333 7.86673 39.8667 7.4334 39.8667C6.76673 39.8667 6.2334 39.3333 6.2334 38.6667C6.2334 38.4333 6.30007 38.2333 6.40007 38.0333L14.8334 20.8333C15.2667 20.2333 15.7334 20.0667 16.3334 20.0333C17.0667 20 17.4667 20.3667 17.8334 20.8333C17.9667 21.0333 19.7334 23.4 21.7667 26.1667L21.9334 26.4C22.0334 26.5667 22.1667 26.7 22.2667 26.8667L22.4334 27.1C22.5001 27.1667 22.5334 27.2667 22.6001 27.3333L22.7667 27.5667L22.9334 27.8L23.2001 28.1667L23.4334 28.5C25.2334 30.9 26.9667 33.2667 27.8667 34.4333C28.2667 34.9667 28.6334 35 28.7001 35H28.7334H28.7667C28.9001 35 29.3001 34.9333 29.5667 34.5C30.6334 32.6667 33.1334 28.1 35.8334 23.2L36.0334 22.8C36.1667 22.5333 36.3001 22.2667 36.4667 22.0333L37.3001 20.5C37.3667 20.3667 37.4334 20.2333 37.5334 20.1L37.7667 19.7C37.8667 19.5 38.0001 19.3 38.1001 19.1L38.3334 18.7C41.6001 12.6667 44.5334 7.29999 44.6667 7.06666L39.5001 8.53332C39.3334 8.59999 39.1667 8.63332 39.0001 8.63332C38.2334 8.63332 37.6001 7.99999 37.6001 7.23332C37.6001 6.53332 38.1334 5.96666 38.8001 5.86666L47.3667 3.66666C47.6667 3.53332 48.0001 3.46666 48.3334 3.46666C48.3667 3.46666 48.3667 3.46666 48.4001 3.46666C48.8001 3.33332 49.2001 3.36666 49.6001 3.59999Z"
              fill="black"
            ></path>
            <path
              d="M80.5331 27.1668C81.4168 27.1668 82.1331 26.4505 82.1331 25.5668C82.1331 24.6831 81.4168 23.9668 80.5331 23.9668C79.6495 23.9668 78.9331 24.6831 78.9331 25.5668C78.9331 26.4505 79.6495 27.1668 80.5331 27.1668Z"
              fill="black"
            ></path>
          </svg>
        </section>
        <section className="certificate-content">
          <h1>Certificate of Completion</h1>
          <p>This is to certify that</p>
          <h2 className="recipient-name">{name}</h2>
          <p>has successfully completed the course</p>
          <h3 className="course-title">{course}</h3>
          <p>on {date}</p>
          <div className="seal">✔</div>
        </section>
      </div>
    </div>
  );
};

export default CourseCertificate;
