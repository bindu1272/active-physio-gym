import {useLocation} from "react-router-dom";

/**
 * transforms errors to format formik needs
 *
 * @param  {[type]}
 * @return {[type]}
 */
export const transformErrors = error => {
  const transformed = {};

  if (error.errors) {
    Object.keys(error.errors).forEach(key => {
      transformed[key] = error.errors[key][0];
    });
  }

  return transformed;
};

export const randomid = length => {
  var result = "";
  var characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  var charactersLength = characters.length;
  for (var i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
};

/**
 * string to color
 *
 * @param  {[type]} string [description]
 * @return {[type]}        [description]
 */
export const stringToColor = string => {
  var colors = [
    "#e51c23",
    "#e91e63",
    "#9c27b0",
    "#673ab7",
    "#3f51b5",
    "#5677fc",
    "#03a9f4",
    "#00bcd4",
    "#009688",
    "#259b24",
    "#8bc34a",
    "#afb42b",
    "#ff9800",
    "#ff5722",
    "#795548",
    "#607d8b"
  ];

  var hash = 0;
  if (string.length === 0) return hash;
  for (var i = 0; i < string.length; i++) {
    hash = string.charCodeAt(i) + ((hash << 5) - hash);
    hash = hash & hash;
  }
  hash = ((hash % colors.length) + colors.length) % colors.length;
  return colors[hash];
};

/**
 * check if is mobile
 */
export const isMobile = () => {
  return (
    typeof window.orientation !== "undefined" ||
    navigator.userAgent.indexOf("IEMobile") !== -1
  );
};

export function useQuery() {
  return new URLSearchParams(useLocation().search);
}
