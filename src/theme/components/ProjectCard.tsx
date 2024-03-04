'use client'

import { FC } from 'react'
import { IProjectCard } from '../../shared/models/global.interfaces'
import { ImStack } from 'react-icons/im'
import Image from 'next/image.js'
import { MdArrowOutward } from 'react-icons/md'
import { motion } from 'framer-motion'
import { useHover } from '@uidotdev/usehooks'

const ProjectCard: FC<IProjectCard> = ({
	id,
	project_name,
	description,
	technologies,
	screenShot,
	demoLink,
	className,
	isPrivate = false,
	index,
}) => {
	const [ref, hovering] = useHover()
	return (
		<motion.div
			key={id}
			ref={ref}
			initial={{ opacity: 0, y: 20 }}
			whileInView={{ opacity: 1, y: 0 }}
			transition={{ delay: index * 0.1, duration: 0.3 }}
			viewport={{ once: true }}
			className={`relative flex flex-col rounded-3xl bg-white p-6 gap-3 border-2 border-transparent overflow-hidden row-span-1 col-span-8 dark:bg-raisin-black lg:p-8 lg:row-span-3 xl:col-span-4`}
		>
			<div className='flex flex-col gap-3'>
				<div className='flex items-center gap-3 opacity-50 z-[1]'>
					<ImStack />
					<span className='font-semibold uppercase'>
						Work Experience 
					</span>
				</div>
				{demoLink && (
					<a
						className='p-2 border-2 border-dusky dark:border-moonlit opacity-40 rounded-full absolute top-6 right-6 lg:top-8 lg:right-8 cursor-pointer hover:bg-sblue hover:text-white dark:hover:bg-sgreen dark:hover:text-pdark transition-colors duration-150 z-[1]'
						href={demoLink}
						target='_blank'
						rel='noreferrer'
						title={`${project_name} demo`}
					>
						<MdArrowOutward />
					</a>
				)}
				<div className='flex flex-col gap-1 z-[1]'>
					<h3 className='text-2xl font-bold'>{project_name}</h3>
					<p className='text-base opacity-70'>{description}</p>
					<div className='flex items-center gap-2 opacity-90 font-medium'>
						{technologies.map(tech => (
							<span key={tech} className='text-sm'>
								{tech}
							</span>
						))}
					</div>
				</div>
				<Image
					className={`absolute -right-10 w-full top-48 rounded-2xl object-cover z-[1] transition-all duration-300 lg:-right-12 lg:top-48 ${
						hovering && 'scale-[1.025]'
					}`}
					src={screenShot}
					alt={project_name}
					title='Project screenshot'
          width={1080}
          height={720}
				/>
			</div>
		</motion.div>
	)
}

export default ProjectCard
