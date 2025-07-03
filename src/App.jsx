export default function Recursos() {
    const recursos = [
      { title: "Resumen de Álgebra Lineal", url: "https://mirecurso.com/algebra" },
      { title: "Guía rápida de React", url: "https://mirecurso.com/react" },
      { title: "Examen resuelto de Física", url: "https://mirecurso.com/fisica" },
    ];
  
    return (
      <div className="min-h-screen bg-gray-50 p-6">
        <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-md p-6">
          <h1 className="text-3xl font-bold mb-4">📚 Mis apuntes y recursos</h1>
          <ul className="space-y-3">
            {recursos.map((r, i) => (
              <li key={i}>
                <a href={r.url} target="_blank" rel="noreferrer" className="text-blue-600 hover:underline">
                  {r.title}
                </a>
              </li>
            ))}
          </ul>
          <p className="mt-6 text-gray-500 text-sm">¿Quieres compartir tus propios recursos? Haz un pull request en mi GitHub 😎</p>
        </div>
      </div>
    );
  }
  