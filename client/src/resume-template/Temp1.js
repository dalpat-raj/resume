import React from 'react'

const Temp1 = (props) => {
	const {data} = props;

	const {
		// Profile-Information
		firstname,
		lastname,
		email,
		phone,
		address,
		website,
		github,
		linkedin,
		twitter,
		facebook,
		instagram,
	
		// Education Information
		college,
		fromyear1,
		toyear1,
		qualification1,
		description1,
		school,
		fromyear2,
		toyear2,
		qualification2,
		description2,
	
		// Project Information...
		title1,
		link1,
		projectDescription1,
		title2,
		link2,
		projectDescription2,
		title3,
		link3,
		projectDescription3,
	
		// Experience Information
		institute1,
		position1,
		duration1,
		experienceDescription1,
		institute2,
		position2,
		duration2,
		experienceDescription2,
	
		// skill hobby Information
		skill1,
		skill2,
		skill3,
		skill4,
		skill5,
		skill6,
		interest1,
		interest2,
		interest3,
		interest4,
		interest5,
		interest6,

		// summary
		summary,
		reference,
	  } = data;

	

  return (
    <div className="yui-t7">
	<div id="inner">
		<div id="hd">
			<div className="yui-gc">
				<div className="yui-u first">
					<h1>{firstname} {lastname}</h1>
					<h2>Web Designer, Director</h2>
				</div>

				<div className="yui-u">
					<div className="contact-info">
						<h3><small>Download PDF</small></h3>
						<h3><small>{email}</small></h3>
						<h3>{phone}</h3>
					</div>
				</div>
			</div>
		</div>

		<div id="bd">
			<div id="yui-main">
				<div className="yui-b">

					<div className="yui-gf">
						<div className="yui-u first">
							<h2>Profile</h2>
						</div>
						<div className="yui-u">
							<p className="enlarge">
								Progressively evolve cross-platform ideas before impactful infomediaries. Energistically visualize tactical initiatives before cross-media catalysts for change. 
							</p>
						</div>
					</div>

					<div className="yui-gf">
						<div className="yui-u first">
							<h2>Skills</h2>
						</div>
						<div className="yui-u">

								<div className="talent">
									<h2>Web Design</h2>
									<p>Assertively exploit wireless initiatives rather than synergistic core competencies.	</p>
								</div>

								<div className="talent">
									<h2>Interface Design</h2>
									<p>Credibly streamline mission-critical value with multifunctional functionalities.	 </p>
								</div>

								<div className="talent">
									<h2>Project Direction</h2>
									<p>Proven ability to lead and manage a wide variety of design and development projects in team and independent situations.</p>
								</div>
						</div>
					</div>

					<div className="yui-gf">
						<div className="yui-u first">
							<h2>Technical</h2>
						</div>
						<div className="yui-u">
							<ul className="talent">
								<li>XHTML</li>
								<li>CSS</li>
								<li className="last">Javascript</li>
							</ul>

							<ul className="talent">
								<li>Jquery</li>
								<li>PHP</li>
								<li className="last">CVS / Subversion</li>
							</ul>

							<ul className="talent">
								<li>OS X</li>
								<li>Windows XP/Vista</li>
								<li className="last">Linux</li>
							</ul>
						</div>
					</div>

					<div className="yui-gf">
	
						<div className="yui-u first">
							<h2>Experience</h2>
						</div>

						<div className="yui-u">

							<div className="job">
								<h2>Facebook</h2>
								<h3>Senior Interface Designer</h3>
								<h4>2005-2007</h4>
								<p>Intrinsicly enable optimal core competencies through corporate relationships. Phosfluorescently implement worldwide vortals and client-focused imperatives. Conveniently initiate virtual paradigms and top-line convergence. </p>
							</div>

							<div className="job">
								<h2>Apple Inc.</h2>
								<h3>Senior Interface Designer</h3>
								<h4>2005-2007</h4>
								<p>Progressively reconceptualize multifunctional "outside the box" thinking through inexpensive methods of empowerment. Compellingly morph extensive niche markets with mission-critical ideas. Phosfluorescently deliver bricks-and-clicks strategic theme areas rather than scalable benefits. </p>
							</div>

							<div className="job">
								<h2>Microsoft</h2>
								<h3>Principal and Creative Lead</h3>
								<h4>2004-2005</h4>
								<p>Intrinsicly transform flexible manufactured products without excellent intellectual capital. Energistically evisculate orthogonal architectures through covalent action items. Assertively incentivize sticky platforms without synergistic materials. </p>
							</div>


							<div className="job last">
								<h2>International Business Machines (IBM)</h2>
								<h3>Lead Web Designer</h3>
								<h4>2001-2004</h4>
								<p>Globally re-engineer cross-media schemas through viral methods of empowerment. Proactively grow long-term high-impact human capital and highly efficient innovation. Intrinsicly iterate excellent e-tailers with timely e-markets.</p>
							</div>

						</div>
					</div>


					<div className="yui-gf last">
						<div className="yui-u first">
							<h2>Education</h2>
						</div>
						<div className="yui-u">
							<h2>Indiana University - Bloomington, Indiana</h2>
							<h3>Dual Major, Economics and English &mdash; <strong>4.0 GPA</strong> </h3>
						</div>
					</div>


				</div>
			</div>
		</div>

		<div id="ft">
			<p>Jonathan Doe &mdash; <small>name@yourdomain.com</small> &mdash; (313) - 867-5309</p>
		</div>
	</div>
</div>

  )
}

export default Temp1