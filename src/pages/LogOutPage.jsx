import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context";
import { toast } from "react-toastify";

const LogoutPage = () => {
  const { logOutUser } = useAuth();
  const navigate = useNavigate();

  const confirmLogout = () => {
    logOutUser();
    toast.success("Logged out successfully");
    navigate("/login");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-300">
      <div className="bg-white p-6 rounded-lg shadow-md text-center max-w-md w-full ">
        <h2 className="text-xl font-bold mb-4">Log Out?</h2>
        <div className="mb-12 w-12 h-12 mx-auto">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            width="57"
            height="84"
            viewBox="0 0 57 84"
          >
            <defs>
              <filter
                id="Rectangle_38"
                x="0"
                y="0"
                width="57"
                height="84"
                filterUnits="userSpaceOnUse"
              >
                <feOffset dy="3" input="SourceAlpha" />
                <feGaussianBlur stdDeviation="2.5" result="blur" />
                <feFlood flood-color="#e8b40a" flood-opacity="0.149" />
                <feComposite operator="in" in2="blur" />
                <feComposite in="SourceGraphic" />
              </filter>
              <filter
                id="Path_3990"
                x="17.428"
                y="22"
                width="28.571"
                height="35"
                filterUnits="userSpaceOnUse"
              >
                <feOffset dy="3" input="SourceAlpha" />
                <feGaussianBlur stdDeviation="2.5" result="blur-2" />
                <feFlood flood-color="#80ba27" flood-opacity="0.161" />
                <feComposite operator="in" in2="blur-2" />
                <feComposite in="SourceGraphic" />
              </filter>
            </defs>
            <g
              id="log_out_-_icon"
              data-name="log out - icon"
              transform="translate(-155.5 -272.5)"
            >
              <g id="icon" transform="translate(163.769 277)">
                <g
                  transform="matrix(1, 0, 0, 1, -8.27, -4.5)"
                  filter="url(#Rectangle_38)"
                >
                  <g
                    id="Rectangle_38-2"
                    data-name="Rectangle 38"
                    transform="translate(7.5 4.5)"
                    fill="#fff"
                    stroke="#232323"
                    stroke-width="1"
                  >
                    <rect width="42" height="69" rx="4" stroke="none" />
                    <rect
                      x="0.5"
                      y="0.5"
                      width="41"
                      height="68"
                      rx="3.5"
                      fill="none"
                    />
                  </g>
                </g>
                <rect
                  id="Rectangle_39"
                  data-name="Rectangle 39"
                  width="42"
                  height="1"
                  transform="translate(-0.769 7)"
                  fill="#232323"
                />
                <rect
                  id="Rectangle_40"
                  data-name="Rectangle 40"
                  width="42"
                  height="1"
                  transform="translate(-0.769 55)"
                  fill="#232323"
                />
                <g
                  id="Ellipse_1"
                  data-name="Ellipse 1"
                  transform="translate(17.231 59)"
                  fill="none"
                  stroke="#232323"
                  stroke-width="1"
                >
                  <circle cx="3.5" cy="3.5" r="3.5" stroke="none" />
                  <circle cx="3.5" cy="3.5" r="3" fill="none" />
                </g>
              </g>
              <g id="sign-out" transform="translate(173.99 299)">
                <g
                  id="Group_3297"
                  data-name="Group 3297"
                  transform="translate(6.438)"
                >
                  <g id="Group_3296" data-name="Group 3296">
                    <g
                      transform="matrix(1, 0, 0, 1, -24.93, -26.5)"
                      filter="url(#Path_3990)"
                    >
                      <path
                        id="Path_3990-2"
                        data-name="Path 3990"
                        d="M165.018,0h-9.286a2.143,2.143,0,0,0-2.143,2.143V6.429a.714.714,0,0,0,1.429,0V2.143a.714.714,0,0,1,.714-.714h9.286a.714.714,0,0,1,.714.714V17.857a.714.714,0,0,1-.714.714h-9.286a.714.714,0,0,1-.714-.714V13.571a.714.714,0,0,0-1.429,0v4.286A2.143,2.143,0,0,0,155.732,20h9.286a2.143,2.143,0,0,0,2.143-2.143V2.143A2.143,2.143,0,0,0,165.018,0Z"
                        transform="translate(-128.66 26.5)"
                        fill="#e8b40a"
                      />
                    </g>
                  </g>
                </g>
                <g
                  id="Group_3299"
                  data-name="Group 3299"
                  transform="translate(0.011 5.723)"
                >
                  <g
                    id="Group_3298"
                    data-name="Group 3298"
                    transform="translate(0)"
                  >
                    <path
                      id="Path_3991"
                      data-name="Path 3991"
                      d="M14.3,140.306H2.448L4.8,137.954a.714.714,0,0,0-1.01-1.01L.219,140.516a.706.706,0,0,0-.154.232.716.716,0,0,0,.155.779L3.791,145.1a.714.714,0,0,0,1.028-.992l-.018-.018-2.353-2.353H14.3a.714.714,0,1,0,0-1.429Z"
                      transform="translate(-0.011 -136.744)"
                      fill="#e8b40a"
                    />
                  </g>
                </g>
              </g>
            </g>
          </svg>
        </div>
        <p className="text-gray-600 mb-6">Are you sure you want to log out?</p>
        <div className="flex justify-center gap-4">
          <button
            className="px-4 py-2 border border-black rounded-lg"
            onClick={() => navigate(-1)}
          >
            Back
          </button>
          <button
            className="bg-black text-white px-4 py-2 rounded-lg"
            onClick={confirmLogout}
          >
            Yes, log out
          </button>
        </div>
      </div>
    </div>
  );
};

export default LogoutPage;
