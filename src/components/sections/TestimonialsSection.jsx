import {
  SectionStyle,
  SectionContainer,
  SectionHeader,
  TestimonialsGrid,
  TestimonialCard,
  TestimonialText,
  TestimonialAuthor,
  AuthorAvatar,
  AuthorInfo
} from '../styles/sections/TestimonialsSection.styled'

const testimonials = [
  {
    text: 'Hermoso lugar y una gran profe que me acompaña sin exigirme. Gracias Vero!',
    author: 'Alumna',
    source: 'Google Maps'
  },
  {
    text: 'Empecé en enero de este año y me encantó! Las clases super personalizadas, y siempre está atenta a todo. Un espacio de mucho amor, armonía y contención.',
    author: 'Alumna',
    source: 'Google Maps'
  },
  {
    text: 'El mejor espacio! Te vas a sentir en confianza y con una energía súper renovadora!',
    author: 'Marina D.',
    source: 'Google Maps'
  },
  {
    text: 'Me encantan las clases de Yoga de Vero. Transmite mucha paz, pero a la vez quedo con energía para seguir el día.',
    author: 'Alumna',
    source: 'Google Maps'
  },
  {
    text: 'Yo empecé yoga con Vero, al principio me costó y Vero con su dulzura y paciencia me enseñó muchísimo. Ahora controlo y alivio mis dolores aplicando sus técnicas.',
    author: 'Alumna',
    source: 'Google Maps'
  },
  {
    text: 'Vero es la mejor profe de yoga; cálida y muy profesional. 100% recomendable.',
    author: 'Alumna',
    source: 'Google Maps'
  }
]

export const TestimonialsSection = () => {
  return (
    <SectionStyle id="testimonios">
      <SectionContainer>
        <SectionHeader>
          <h2>Lo que dicen mis alumnxs</h2>
          <p>Experiencias de quienes practican conmigo</p>
        </SectionHeader>

        <TestimonialsGrid>
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index}>
              <TestimonialText>{testimonial.text}</TestimonialText>
              <TestimonialAuthor>
                <AuthorAvatar>
                  {testimonial.author.charAt(0)}
                </AuthorAvatar>
                <AuthorInfo>
                  <h4>{testimonial.author}</h4>
                  <span>{testimonial.source}</span>
                </AuthorInfo>
              </TestimonialAuthor>
            </TestimonialCard>
          ))}
        </TestimonialsGrid>
      </SectionContainer>
    </SectionStyle>
  )
}
