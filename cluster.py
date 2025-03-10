from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.cluster import KMeans
import matplotlib.pyplot as plt
from sklearn.decomposition import PCA

# Пример текстов
documents = [
    "Я люблю программирование на Python.",
    "Python - это отличный язык для анализа данных.",
    "Машинное обучение и искусственный интеллект - это интересные области.",
    "Программирование на Java тоже популярно.",
    "Анализ данных с помощью Python и R.",
    "Искусственный интеллект меняет мир."
]


vectorizer = TfidfVectorizer(stop_words=['russian'])
X = vectorizer.fit_transform(documents)


k = 3
kmeans = KMeans(n_clusters=k, random_state=42)
kmeans.fit(X)


labels = kmeans.labels_
# ❤️❤️❤️❤️❤️❤️❤️❤️
# (*/ω＼*)(❁´◡`❁)
# Выводим результаты
for i, doc in enumerate(documents):
    print(f"Документ: {doc} => Кластер: {labels[i]}", X[i])


pca = PCA(n_components=2)
reduced_X = pca.fit_transform(X.toarray())

plt.scatter(reduced_X[:, 0], reduced_X[:, 1], c=labels, cmap='viridis')
plt.title('Кластеризация текстов с использованием K-means')
plt.xlabel('Компонента 1')
plt.ylabel('Компонента 2')
plt.colorbar(label='Кластер')
plt.show()