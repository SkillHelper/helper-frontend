"use client";
import styled from "styled-components";
import Logo from "../atoms/Logo";
import MaterialIcon from "../atoms/MaterialIcon";
import { Link, useLocation } from "react-router-dom";
import { useUserInfo } from "../../hooks/auth";

const menu: {
  name: string;
  icon: string;
  href: string;
}[] = [
  {
    name: "마이스터넷",
    href: "/",
    icon: "house",
  },
  {
    name: "풀이 모음",
    href: "/explanation",
    icon: "book_4",
  },
  {
    name: "HELP",
    href: "/help",
    icon: "contact_support",
  },
];

interface ProfileProps {
  profileImage?: string;
  email?: string;
  username?: string;
}
function Profile({ profileImage, email, username }: ProfileProps) {
  return (
    <ProfileWrapper>
      <ProfileImage
        src={profileImage}
        alt="profile image"
        width={48}
        height={48}
      />

      <ProfileInfo>
        <Username>{username}</Username>
        <Email>{email}</Email>
      </ProfileInfo>
    </ProfileWrapper>
  );
}

const ProfileWrapper = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  gap: 12px;
`;

const ProfileImage = styled.img`
  border-radius: 12px;
  object-fit: cover;
`;

const ProfileInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const Username = styled.p`
  font-size: 18px;
  font-weight: 700;
  letter-spacing: -0.18px;
  color: #000;
`;

const Email = styled.p`
  font-size: 14px;
  font-weight: 400;
  letter-spacing: -0.14px;
  color: #595959;
`;

interface MenuProps {
  enabled: boolean;

  name: string;
  href: string;
  icon: string;
}
function MenuItem({ enabled, icon, name, href }: MenuProps) {
  return (
    <MenuWrapper to={href} $isEnabled={enabled}>
      <MaterialIcon>{icon}</MaterialIcon>
      <p>{name}</p>
    </MenuWrapper>
  );
}

interface EnabledState {
  $isEnabled?: boolean;
}
const MenuWrapper = styled(Link)<EnabledState>`
  display: flex;
  align-items: center;
  gap: 12px;

  padding: 16px 20px;
  border-radius: 8px;

  background-color: ${({ $isEnabled }) =>
    $isEnabled ? "#FFEEDA" : "transparent"};

  font-weight: ${({ $isEnabled }) => ($isEnabled ? 600 : 400)};

  p {
    font-size: 17px;
  }
`;

export default function Sidebar() {
  const { pathname } = useLocation();

  const { data: userInfo } = useUserInfo();

  return (
    <>
      <Wrapper>
        <Logo />

        <Menu>
          {menu.map((item) => (
            <li key={item.href}>
              <MenuItem
                name={item.name}
                icon={item.icon}
                href={item.href}
                enabled={
                  pathname === item.href ||
                  (item.href !== "/" && pathname.startsWith(item.href))
                }
              />
            </li>
          ))}
        </Menu>

        <Profile
          username={userInfo?.username}
          email={userInfo?.email}
          profileImage={userInfo?.profileImage}
        />
      </Wrapper>
    </>
  );
}

const Wrapper = styled.div`
  width: 280px;
  height: 100dvh;
  padding: 16px;

  background-color: #ffffff;
  border-right: 1px solid #dbdbdb;

  display: flex;
  flex-direction: column;
  gap: 16px;

  position: fixed;
  left: 0;
`;

const Menu = styled.ol`
  display: flex;
  flex-direction: column;
  flex: 1;
`;
