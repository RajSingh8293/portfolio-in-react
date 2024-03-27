import React from 'react'
import SkillsContent from './SkillsContent'
import OthersHero from '../../OthersHero/OthersHero'
import image from '../../../Images/services_img.jpg'

const Skills = () => {
  return (
    <section>
      <OthersHero title="Skills" hash="#" image={image} />
      <div className="pt-16 px-8 pb-12">
        <SkillsContent />
      </div>
    </section>
  )
}

export default Skills
