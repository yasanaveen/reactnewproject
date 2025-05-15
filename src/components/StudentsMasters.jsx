import React from 'react';
import { Search } from 'lucide-react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import StateIcon from '../Images/State.png';
import GroupIcon from '../Images/Group.png';
import CampusIcon from '../Images/Campus.png';
import FeePaymentYearIcon from '../Images/FeePaymentYear.png';
import FeeHeadsIcon from '../Images/Fee Heads.png';
import OrganizationImage from '../Images/Organization.png'; 
import CardTypeImage from '../Images/CardType.png';
import StreamImage from '../Images/Steam.png';
import ProgramNameImage from '../Images/ProgramName.png';
import ExamProgramImage from '../Images/ExamProgram.png';
import CourseTrackImage from '../Images/CourseTrack.png';

const StudentsMasters = () => {
  const filterButtons = [
    {
      name: 'State',
      icon: <img src={StateIcon} alt="State" style={{ width: 18, height: 18 }} />,
      path: 'state'
    },
    {
      name: 'City',
      icon: <img src={GroupIcon} alt="City" style={{ width: 18, height: 18 }} />,
      
      path: 'city'
    },
    {
      name: 'Campus',
      icon: <img src={CampusIcon} alt="Campus" style={{ width: 18, height: 18 }} />,
      path: 'campus'
    },
    {
      name: 'Fee Payment Year',
      icon: <img src={FeePaymentYearIcon} alt="Fee Payment Year" style={{ width: 18, height: 18 }} />,
      path: 'fee-payment-year'
    },
    {
      name: 'Fee Heads',
      icon: <img src={FeeHeadsIcon} alt="Fee Heads" style={{ width: 18, height: 18 }} />,
      path: 'fee-heads'
    },
    {
      name: 'Organisation',
      icon: <img src={OrganizationImage} alt="Organisation" style={{ width: 20, height: 20 }} />,
      path: 'organisation'
    },
    {
      name: 'Card Type',
      icon: <img src={CardTypeImage} alt="Card Type" style={{ width: 18, height: 18 }} />,
      path: 'card-type'
    },
    {
      name: 'Stream',
      icon: <img src={StreamImage} alt="Stream" style={{ width: 18, height: 18 }} />,
      path: 'stream'
    },
    {
      name: 'Program Name',
      icon: <img src={ProgramNameImage} alt="Program Name" style={{ width: 18, height: 18 }} />,
      path: 'program-name'
    },
    {
      name: 'Exam Program',
      icon: <img src={ExamProgramImage} alt="Exam Program" style={{ width: 18, height: 18 }} />,
      path: 'exam-program'
    },
    {
      name: 'Course Track',
      icon: <img src={CourseTrackImage} alt="Course Track" style={{ width: 18, height: 18 }} />,
      path: 'course-track'
    }    
  ];

  const location = useLocation();
  const isStudentsMasters = location.pathname === '/students';

  return (
    <>
      <style>{`
        .students-masters {
          padding: 24px;
          backdrop-filter: blur(16.2px);
          -webkit-backdrop-filter: blur(16.2px);
          border-radius: 12px;
          min-height: 400px;
        }

        .top-section {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          flex-wrap: wrap;
          gap: 20px;
          margin-bottom: 24px;
        }

        .left-section {
          flex: 1;
          min-width: 300px;
        }

        .right-section {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          max-width: 517px;
          width: 915px;
          padding: 16px;
          background-color: white;
          border-radius: 25px;
          margin: 0 auto;
          justify-content: center;
        }

        .title {
          font-size: 24px;
          font-weight: 700;
          margin-bottom: 8px;
        }

        .description {
          font-size: 16px;
          color: #6E7C87;
          margin-bottom: 13px;
          width:479px;
        }

        .search-bar-wrapper {
          position: relative;
          width: 100%;
          max-width: 300px;
        }

        .search-icon {
          position: absolute;
          left: 10px;
          top: 50%;
          transform: translateY(-50%);
          color: #888;
          pointer-events: none;
        }

        .search-bar {
          width: 100%;
          padding: 8px 12px;
          padding-left: 36px;
          border: 1px solid #e2e8f0;
          border-radius: 20px;
          font-size: 14px;
        }

        .search-bar::placeholder {
          color: rgba(0, 0, 0, 0.25);
        }

        .filter-button {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 6px;
          padding: 8px 16px;
          border: 1px solid #E8E8E8;
          border-radius: 30px;
          background-color: #FFFFFF;
          font-size: 12px;
          color: #444;
          cursor: pointer;
          transition: background-color 0.2s, border-color 0.2s, color 0.2s;
          box-sizing: border-box;
 IS         white-space: nowrap;
          text-align: center;
          text-decoration: none;
          flex: 1 1 calc(33.33% - 8px); /* Adjust button width for smaller screens */
        }

        .filter-button.active {
          background-color: #007bff;
          border-color: #007bff;
          color: #FFFFFF;
        }

        .filter-button:hover {
          background-color: #f2f2f2;
        }

        .filter-button.active:hover {
          background-color: #0056b3;
        }

        .filter-button span {
          font-weight: 600;
          max-width: 100%;
          overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
        }

        /* Responsive Design */
        @media (max-width: 1024px) {
          .top-section {
            gap: 15px;
          }
          .left-section {
            min-width: 100%;
          }
          .right-section {
            max-width: 100%;
            padding: 12px;
          }
        }

        @media (max-width: 768px) {
          .students-masters {
            padding: 16px;
          }
          .right-section {
            gap: 6px;
            padding: 10px;
          }
          .filter-button {
            flex: 1 1 calc(50% - 6px); /* Two buttons per row */
            padding: 6px 12px;
            font-size: 11px;
          }
          .title {
            font-size: 20px;
          }
          .description {
            font-size: 13px;
          }
        }

        @media (max-width: 480px) {
          .students-masters {
            padding: 12px;
          }
          .left-section {
            min-width: 100%;
          }
         .right-section {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          max-width: 517px;
          width: 80%;
          padding: 16px;
          background-color: white;
          border-radius: 25px;
          margin: 0 auto;
          justify-content: center;
        }
           .filter-button {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 6px;
          padding: 8px 16px;
          border: 1px solid #E8E8E8;
          border-radius: 30px;
          background-color: #FFFFFF;
          font-size: 12px;
          color: #444;
          cursor: pointer;
          transition: background-color 0.2s, border-color 0.2s, color 0.2s;
          box-sizing: border-box;
 IS         white-space: nowrap;
          text-align: center;
          text-decoration: none;
          flex: 1 1 calc(33.33% - 8px); /* Adjust button width for smaller screens */
        }
          .title {
            font-size: 18px;
          }
          .description {
            font-size: 12px;
          }
          .search-bar-wrapper {
            max-width: 100%;
          }
        }

        @media (max-width: 360px) {
          .students-masters {
            padding: 10px;
          }
          .right-section {
            gap: 4px;
            padding: 6px;
          }
          .filter-button {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 6px;
          padding: 8px 16px;
          border: 1px solid #E8E8E8;
          border-radius: 30px;
          background-color: #FFFFFF;
          font-size: 12px;
          color: #444;
          cursor: pointer;
          transition: background-color 0.2s, border-color 0.2s, color 0.2s;
          box-sizing: border-box;
 IS         white-space: nowrap;
          text-align: center;
          text-decoration: none;
          flex: 1 1 calc(33.33% - 8px); /* Adjust button width for smaller screens */
        }
          .filter-button img {
            width: 16px;
            height: 16px;
          }
          .title {
            font-size: 16px;
          }
          .description {
            font-size: 11px;
          }
        }

        @media (max-width: 320px) {
          .students-masters {
            padding: 8px;
          }
          .right-section {
            gap: 3px;
            padding: 5px;
          }
           .filter-button {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 6px;
          padding: 8px 16px;
          border: 1px solid #E8E8E8;
          border-radius: 30px;
          background-color: #FFFFFF;
          font-size: 12px;
          color: #444;
          cursor: pointer;
          transition: background-color 0.2s, border-color 0.2s, color 0.2s;
          box-sizing: border-box;
 IS         white-space: nowrap;
          text-align: center;
          text-decoration: none;
          flex: 1 1 calc(33.33% - 8px); /* Adjust button width for smaller screens */
        }
          .filter-button img {
            width: 14px;
            height: 14px;
          }
          .title {
            font-size: 14px;
          }
          .description {
            font-size: 10px;
          }
          .search-bar {
            padding: 6px 10px 6px 30px;
            font-size: 12px;
          }
          .search-icon {
            width: 16px;
            height: 16px;
          }
        }
      `}</style>

      <div>
        {isStudentsMasters && (
          <div className="students-masters">
            <div className="top-section">
              <div className="left-section">
                <h1 className="title">Students Masters</h1>
                <p className="description">
                  Access and manage comprehensive student details seamlessly. View personalized profiles tailored to your campus.
                </p>
                <div className="search-bar-wrapper">
                  <Search className="search-icon" size={18} />
                  <input
                    type="text"
                    className="search-bar"
                    placeholder="Search for the module"
                  />
                </div>
              </div>
              <div className="right-section">
                {filterButtons.map((button) => (
                  <Link
                    key={button.name}
                    to={button.path}
                    className="filter-button"
                    onClick={() => console.log(`Navigating to ${button.path}`)}
                  >
                    {button.icon}
                    <span>{button.name}</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        )}
        <Outlet />
      </div>
    </>
  );
};

export default StudentsMasters;