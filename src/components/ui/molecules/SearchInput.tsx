import React from "react"
import { CgSearch } from "@/components/Icon"
import styled from "styled-components"

export const SearchInputContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 0 40px;
  position: relative;
  border-radius: 40px;
  width: 360px;
  height: 40px;
  overflow: hidden;
  border: 1px solid #dddddd;
  background-color: #fafafa;

  /* icon */
  svg {
    font-size: 2rem;
    position: absolute;
    top: 50%;
    right: 20px;
    transform: translateY(-50%);
    color: #666666;
  }
`

export const SearchInputStyle = styled.input`
  width: 100%;
  height: 100%;
  border: 0;
  font-size: 1.2rem;
  text-align: left;
  padding: 9px 21px;
  font-weight: 500;
  color: #666666;
  background-color: transparent;
  padding-right: 50px;

  &:focus {
    outline: none;
  }
`

export type SearchInputProps = {}

export const SearchInput: React.FC<SearchInputProps> = (props) => {
  return (
    <SearchInputContainer>
      <SearchInputStyle type="text" placeholder="검색어를 입력 해주세요" />
      <CgSearch />
    </SearchInputContainer>
  )
}
