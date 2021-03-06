/*
 * HomePage
 *
 * This is the first thing users see of the app
 * Route: /
 *
 */

import React, { Component } from 'react';
import { Link } from 'react-router';
import Nav from '../Nav.react';
import { connect } from 'react-redux';

class HomePage extends Component {
	render() {
    const dispatch = this.props.dispatch;
    const { loggedIn } = this.props.data;

    return (
			<article>
				<div>
					<section className="text-section">
						{/* Change the copy based on the authentication status */}
						{loggedIn ? (
							<h1>Picasso Online Judge. Logged in!!!</h1>
						) : (
							<div>
								<h1>Picasso Online Judge. Not logged in</h1>
								<p>ID : picasso / PW : 109</p>
							</div>
						)}
						{loggedIn ? (
							<Link to="/dashboard" className="btn btn--dash">Dashboard</Link>
						) : (
							<div>
								<Link to="/login" className="btn btn--login">Login</Link>
								<Link to="/register" className="btn btn--register">Register</Link>
							</div>
						)}
						<br/>
						<br/>
						<p>제주대학교 컴퓨터교육과 2016-2 협동프로젝트 Picasso (고원지, 이현기)의 산출물입니다.</p>
						<h2 id="-">소개</h2>

						<p>본 프로젝트는 소스코드를 통해 알고리즘을 추상적으로 이해하는데 어려움을 겪는 학습자를 위하여, 소스코드 작성과 그 결과를 보여주는 온라인 코딩 대회 시스템을 구현한다. 기존의 온라인 코딩 대회 시스템에서는, 문제에 대해 이 소스코드가 성공/실패인지만을 확인하기 때문에 자기가 작성하거나 다른 사람이 작성한 소스코드를 디버깅하기 위해선 전체 소스코드를 읽어 이해하여야 했다. 프로그래밍에 익숙한 사람이라면, 이것이 매우 익숙하겠지만 초심자에게는 이와 같은 과정이 어려움을 겪기 때문에, 소스코드를 이해하는데 도움이 되는 시각화 자료를 같이 볼 수 있게 하는 시스템을 구현하려 한다.</p>

						<h2 id="-">사용법</h2>
						<ol>
						<li><p>사용자 등록 후 로그인을 한다.</p>
						</li>
						<li><p>Dashboard에서 나의 활동 로그와 전체 사용자의 활동로그를 확인할 수 있다. <strong>List</strong> 버튼을 통해 문제 리스트 화면으로 이동한다.</p>
						</li>
						<li><p>문제들이 나열되어 있는 표에서 문제의 제목을 누르면 해당 문제 내용을 볼 수 있는 화면으로 전환된다. 원하는 문제 제목을 클릭한다.</p>
						</li>
						<li><p>문제와 입력, 출력 등을 확인할 수 있다. <strong>Solve</strong> 버튼을 통해 해당 문제의 해결 소스코드를 제출할 수 있는 화면으로 이동한다.</p>
						</li>
						<li><p>텍스트 입력란에 문제를 해결한 소스코드를 입력하고 <strong>Submit</strong> 버튼을 눌러 소스코드를 서버에 제출한다.</p>
						</li>
						<li><p>서버에서 보내온 답안 판독결과를 표시하는 팝업이 뜬다. 답안 판독에 사용된 테스트 케이스를 대입하였을 때의 시각화 데이터를 볼 수 있는 화면으로 <strong>View</strong> 버튼을 통해 이동 할 수 있다. 만약 해결하지 못하거나 소스코드를 수정하고 싶을때에는 <strong>No</strong> 버튼을 통해 소스코드를 수정할 수 있다. 또한 시각화 데이터 확인을 하지 않고 초기 화면으로 돌아가고 싶다면 <strong>Return</strong> 버튼을 통해 Dashboard화면으로 이동할 수 있다.</p>
						</li>
						<li><p>팝업 창에서 <strong>View</strong> 버튼을 클릭했다면 해당 테스트 케이스가 대입되어진 시각화 데이터를 확인 할 수 있다. 제출한 소스코드는 <strong>Forwad</strong> 버튼을 통해 한 줄씩 수행되며, <strong>Back</strong> 버튼을 통해 이전 수행 했던 줄로 되돌아 갈 수 있다. 시각화 데이터를 확인 하였으면 <strong>Solve</strong> 버튼을 통해 소스코드 제출 화면으로 돌아 갈 수 있다.</p>
						</li>
						</ol>

						<h2 id="-">다운로드</h2>
						<pre className="editor-colors lang-text">
						<div className="line">
						<span className="text plain">
						<span className="meta paragraph text">
						<span>git&nbsp;clone&nbsp;</span>
						<span className="markup underline link https hyperlink">
						<span>https://github.com/PicassoOnlineJudgeTeam/PicassoOnlineJudge.git</span>
						</span>
						</span>
						</span>
						</div>
						</pre>
					</section>
				</div>
			</article>
		);
  }
}

// Which props do we want to inject, given the global state?
function select(state) {
  return {
    data: state
  };
}

// Wrap the component to inject dispatch and state into it
export default connect(select)(HomePage);
