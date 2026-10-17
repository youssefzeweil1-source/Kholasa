const healthConditions = [
  {
    category: 'الجهاز التنفسي',
    id: 'cold', name: 'نزلة برد', icon: '🤧',
    desc: 'عدوى فيروسية بتسبب رشح، عطس، وتكسير في الجسم.',
    remedies: [
      {
        name: 'الزعتر', latin: 'Thymus vulgaris', img: 'images/thyme.jpg',
        how: 'مضاد طبيعي للميكروبات، وبيساعد في طرد البلغم.',
        dosage: 'ملعقة صغيرة على كوب ماء مغلي.',
        duration: '⏳ 3-5 أيام.',
        plantingSeason: '🌱 أفضل وقت للزراعة: أواخر الخريف (أكتوبر - نوفمبر).',
        isEgyptian: true, isSafeForPregnancy: false,
        location: { world: 'حوض البحر الأبيض المتوسط.', egypt: 'سيناء والمنيا.', where: 'العطارين.' },
        warnings: ['زيت الزعتر المركز سام.', 'ممنوع للحوامل.']
      },
      {
        name: 'المورينجا', latin: 'Moringa oleifera', img: 'images/moringa.jpg',
        how: 'داعم قوي للمناعة.',
        dosage: 'نص ملعقة صغيرة بودرة.',
        duration: '⏳ 3-4 أيام.',
        plantingSeason: '🌱 أفضل وقت للزراعة: الربيع (مارس - أبريل).',
        isEgyptian: false, isSafeForPregnancy: false,
        location: { world: 'الهند وأفريقيا.', egypt: 'أسوان والبحيرة.', where: 'العطارين.' },
        warnings: ['ممنوعة للحوامل.']
      }
    ]
  },
  {
    category: 'الجهاز الهضمي',
    id: 'digestive', name: 'عسر هضم وانتفاخ', icon: '🫃',
    desc: 'مشاكل في المعدة وغازات.',
    remedies: [
      {
        name: 'الكراوية', latin: 'Carum carvi', img: 'images/caraway.jpg',
        how: 'من أفضل الأعشاب لطرد الغازات.',
        dosage: 'ملعقة صغيرة على كوب ماء مغلي.',
        duration: '⏳ 30-45 دقيقة.',
        plantingSeason: '🌱 أفضل وقت للزراعة: الخريف (سبتمبر - أكتوبر).',
        isEgyptian: true, isSafeForPregnancy: true,
        location: { world: 'مصر وأوروبا.', egypt: 'المنيا وأسيوط.', where: 'العطارين.' },
        warnings: ['آمنة بشكل عام.']
      },
      {
        name: 'النعناع', latin: 'Mentha piperita', img: 'images/mint.jpg',
        how: 'مهدئ لعضلات المعدة.',
        dosage: 'ملعقة صغيرة على كوب ماء مغلي.',
        duration: '⏳ 30 دقيقة.',
        plantingSeason: '🌱 أفضل وقت للزراعة: الربيع (فبراير - مارس).',
        isEgyptian: true, isSafeForPregnancy: true,
        location: { world: 'عالمي.', egypt: 'الفيوم وبني سويف.', where: 'سوق الخضار.' },
        warnings: ['ممنوع لمرضى ارتجاع المريء.']
      }
    ]
  }
];

const blends = [
  {
    name: 'شاي البرد القوي', icon: '🍵',
    ingredients: 'زعتر + نعناع + ليمون + عسل',
    desc: 'خلطة سحرية بتدفيك وتفتح أنفك وتخفف الكحة والتهاب الحلق.',
    howTo: 'اغلي كوب ماء، ضيف نص ملعقة زعتر ونص ملعقة نعناع، غطي 5 دقايق، صفي وضيف ليمون وعسل.',
    warnings: ['متستخدمهاش لو عندك حموضة.', 'العسل ممنوع للأطفال أقل من سنة.']
  },
  {
    name: 'شاي النوم العميق', icon: '🌙',
    ingredients: 'بابونج + لافندر',
    desc: 'بيهدي الأعصاب وبيجيب نوم عميق.',
    howTo: 'ملعقة بابونج + نص ملعقة لافندر على ماء مغلي، غطي 10 دقايق، اشربه دافي قبل النوم.',
    warnings: ['ممكن يسبب نعاس، متسوقش عربية بعده.']
  }
];
