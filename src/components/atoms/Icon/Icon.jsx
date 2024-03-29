import React from "react";
import {
  AiOutlineLoading3Quarters,
  AiFillCreditCard,
  AiOutlineCheckCircle,
  AiFillPhone,
  AiOutlineSearch,
} from "react-icons/ai";
import {
  BsFillSunFill,
  BsFillMoonFill,
  BsFillBriefcaseFill,
  BsFillMegaphoneFill,
} from "react-icons/bs";
import { SlArrowDown, SlArrowUp } from "react-icons/sl";
import {
  BiBrain,
  BiHelpCircle,
  BiBookOpen,
  BiArrowFromRight,
  BiArrowFromLeft,
  BiLeftArrowAlt,
  BiRightArrowAlt,
} from "react-icons/bi";
import { ImLocation } from "react-icons/im";
import {
  FaMoneyBillWave,
  FaUserCircle,
  FaHeadSideVirus,
  FaLongArrowAltDown,
  FaShieldAlt,
  FaBars,
  FaBold,
  FaTimes,
  FaItalic,
  FaUnderline,
} from "react-icons/fa";
import {
  AiOutlineMail,
  AiOutlineBulb,
  AiOutlineUserAdd,
  AiOutlineTeam,
  AiOutlineGoogle,
  AiOutlineTwitter,
  AiOutlineLink,
  AiFillYoutube,
  AiFillFacebook,
  AiFillLinkedin,
  AiOutlineWhatsApp,
  AiOutlinePaperClip,
  AiFillHome,
} from "react-icons/ai";
import { GiGears, GiTakeMyMoney, GiUsaFlag } from "react-icons/gi";
import { TfiArrowsCorner } from "react-icons/tfi";

import {
  BsArrowLeft,
  BsArrowRight,
  BsImage,
  BsFillCalculatorFill,
  BsShieldFillCheck,
  BsFillShieldLockFill,
  BsFillTrashFill,
} from "react-icons/bs";
import { CgArrowsV } from "react-icons/cg";
import { FiClock } from "react-icons/fi";
import { TbWorld } from "react-icons/tb";
import styles from "./icon.module.css";
import FacebookAds from "@assets/appsicons/Facebook Ads.svg";
import GoogleBusinessProfile from "@assets/appsicons/Google Business Profile.svg";
import GoogleSearch from "@assets/appsicons/Google Search.svg";
import InstagramAds from "@assets/appsicons/Instagram Ads.svg";
import LinkedinB2B from "@assets/appsicons/Linkedin B2B.svg";
const Icon = ({ type, size, color = "inherit" }) => {
  const props = {
    size: size || "100%",
    className: `${styles.icon}`,
    color,
  };
  const icons = {
    loading: <AiOutlineLoading3Quarters {...props} />,
    card: <AiFillCreditCard {...props} />,
    arrowDown: <SlArrowDown {...props} />,
    arrowUp: <SlArrowUp {...props} />,
    bulb: <AiOutlineBulb {...props} />,
    phone: <AiFillPhone {...props} />,
    shieldLock: <BsFillShieldLockFill {...props} />,
    userplus: <AiOutlineUserAdd {...props} />,
    sun: <BsFillSunFill {...props} />,
    moon: <BsFillMoonFill {...props} />,
    ai: <BiBrain {...props} />,
    location: <ImLocation {...props} />,
    budget: <FaMoneyBillWave {...props} />,
    user: <FaUserCircle {...props} />,
    checked: <BsShieldFillCheck {...props} />,
    case: <BsFillBriefcaseFill {...props} />,
    aiHead: <FaHeadSideVirus {...props} />,
    gears: <GiGears {...props} />,
    arrows: <TfiArrowsCorner {...props} />,
    leftArrow: <BsArrowLeft {...props} />,
    rightArrow: <BsArrowRight {...props} />,
    image: <BsImage {...props} />,
    downArrow: <FaLongArrowAltDown {...props} />,
    home: <AiFillHome {...props} />,
    mail: <AiOutlineMail {...props} />,
    shield: <FaShieldAlt {...props} />,
    bars: <FaBars {...props} />,
    help: <BiHelpCircle {...props} />,
    close: <FaTimes {...props} />,
    whatsapp: <AiOutlineWhatsApp {...props} />,
    bold: <FaBold {...props} />,
    underline: <FaUnderline {...props} />,
    italic: <FaItalic {...props} />,
    checkMark: <AiOutlineCheckCircle {...props} />,
    money: <GiTakeMyMoney {...props} />,
    megaphone: <BsFillMegaphoneFill {...props} />,
    team: <AiOutlineTeam {...props} />,
    book: <BiBookOpen {...props} />,
    search: <AiOutlineSearch {...props} />,
    calc: <BsFillCalculatorFill {...props} />,
    clock: <FiClock {...props} />,
    google: <AiOutlineGoogle {...props} />,
    facebook: <AiFillFacebook {...props} />,
    twitter: <AiOutlineTwitter {...props} />,
    trash: <BsFillTrashFill {...props} />,
    upDownArrows: <CgArrowsV {...props} />,
    doubleArrowLeft: <BiArrowFromRight {...props} />,
    doubleArrowRight: <BiArrowFromLeft {...props} />,
    singleArrowLeft: <BiLeftArrowAlt {...props} />,
    singleArrowRight: <BiRightArrowAlt {...props} />,
    link: <AiOutlineLink {...props} />,
    youtube: <AiFillYoutube {...props} />,
    linkedin: <AiFillLinkedin {...props} />,
    clip: <AiOutlinePaperClip {...props} />,
    usaFlag: <GiUsaFlag {...props} />,
    world: <TbWorld {...props} />,
    "Facebook Ads": (
      <img src={FacebookAds} style={{ width: size, height: size }} />
    ),
    "Google Business Profile": (
      <img src={GoogleBusinessProfile} style={{ width: size, height: size }} />
    ),
    "Instagram Ads": (
      <img src={InstagramAds} style={{ width: size, height: size }} />
    ),
    "Google Search Ads": (
      <img src={GoogleSearch} style={{ width: size, height: size }} />
    ),
    "B2B Lead Generation": (
      <img src={LinkedinB2B} style={{ width: size, height: size }} />
    ),
  };
  return <i>{icons[type]}</i>;
};

export default Icon;
