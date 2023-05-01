import React, { useState, useEffect, useCallback } from "react";
import { AiOutlineClose } from "react-icons/ai";

import PlayButton from "./PlayButton";
import FavoriteButton from "./FavoriteButton";

import useInfoModel from "@/hooks/useInfoModel";
import useMovie from "@/hooks/useMovie";

interface InfoModelProps {
  visible?: boolean;
  onClose: any;
}
const InfoModel: React.FC<InfoModelProps> = ({ visible, onClose }) => {
  const [isVisible, setIsVisible] = useState(!!visible);
  const { movieId } = useInfoModel();
  const { data = {} } = useMovie(movieId);
  useEffect(() => {
    setIsVisible(!!visible);
  }, [visible]);

  const handleClose = useCallback(() => {
    setIsVisible(false);
    setTimeout(() => {
      onClose();
    }, 300);
  }, [onClose]);

  if (!isVisible) {
    return null;
  }
  return <div>InfoModel</div>;
};

export default InfoModel;
