import pytesseract
from PIL import Image
from config import path_to_tesseract
import re
from fuzzywuzzy import fuzz
from transformers import AutoTokenizer, AutoModel
import torch
from sklearn.metrics.pairwise import cosine_similarity
import numpy as np
from sentence_transformers import SentenceTransformer
from sklearn.metrics.pairwise import cosine_similarity

pytesseract.pytesseract.tesseract_cmd = path_to_tesseract
def find_any_word_sliding_window(image_path, wordlist, threshold=70, window_size=100):
    try:
        # 1. OCR
        image = Image.open(image_path)
        text = pytesseract.image_to_string(image, lang='rus')

        # 2. Предобработка
        text = text.lower().strip()
        text = re.sub(r"[^\w\s]", "", text)
        text = re.sub(r"\s+", " ", text)

        # 3. Скользящее окно
        for i in range(0, len(text) - window_size, window_size // 2): # перекрытие наполовину
            window = text[i:i + window_size]

            # 4. Поиск любого слова из списка в текущем окне
            for word in wordlist:
                score = fuzz.partial_ratio(window, word) # partial_ratio для поиска подстрок
                if score >= threshold:
                    print(f"Найдено слово '{word}' в окне: {window[:50]}... (схожесть: {score})")


        return False  #

    except Exception as e:
        print(f"Ошибка: {e}")
        return False

# Пример использования:
image_path_local = 'path_to_image.jpg'
wordlist = ["чемпионат", "университет", "диплом", "команда", "беларусь", "2020"]

if find_any_word_sliding_window(image_path_local, wordlist):
    print("На изображении найдено слово из списка.")
else:
    print("На изображении не найдено ни одного слова из списка.")








def check_word_with_proximity(image_path, target_word):

    # 1. OCR
    image = Image.open(image_path)
    text = pytesseract.image_to_string(image, lang='eng+rus')
    return find_phrase_embedding_based(text, target_word)




image_path_local = 'data/AchievementsDataset/12_100229_1_179456.jpg'


print(check_word_with_proximity(image_path_local, 'ноября'))