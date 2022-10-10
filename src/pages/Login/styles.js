import styled from "styled-components";

export const ContainerLogin = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
	background: #d4d4d4;

  width: 100%;
  height: 100vh;


`;
export const LoginInfos = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	background: #fff;
	width: 500px;
	height: 60%;
	border-radius: 10px;
	h1{
    margin-bottom: 10px;
  }
  img{
    height: 250px;
    border-radius: 10px;
    margin-bottom: 10px;
  }
  button{
    width: 300px;
    height: 50px;
    border-radius: 10px;
    font-weight: bold;
    font-size: 16px;
    transition: background-color 1s;
    :hover{
      background: #d4d4d4;
    }
  }
	@media only screen and (max-width: 360px) {
		width: 300px;
		img{
			height: 150px;
		}
		button{
			width: 250px;

		}
	}
	@media only screen and (max-width: 414px) {
		width: 380px;
	}


`;

