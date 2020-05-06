import React from "react";
import AvatarDemo from "@material-ui/core/Avatar";
import { getColor } from "../../../shared/utils/color-from";
import { titleInitials } from "../../../shared/utils/title-initial";

export const Avatar = ({ colorFrom, children, ...rest }) => {
  return (
    <AvatarDemo style={{ backgroundColor: getColor(colorFrom) }} {...rest}>
      {titleInitials(children)}
    </AvatarDemo>
  );
};
