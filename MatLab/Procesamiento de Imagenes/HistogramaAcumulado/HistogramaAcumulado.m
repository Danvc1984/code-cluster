function HistogramaAcumulado()
I=imread('Josuke1.jpg');
figure('Name','Original','NumberTitle','off')
imshow(I(:,:,1));
[M,N]=size(I(:,:,1));
h=zeros(1,256);
Gray = (I(:,:,1)*0.299)+(I(:,:,2)*0.587)+(I(:,:,3)*0.114);
for x=1:M
    for y=1:N
        i=Gray(x,y)+1;
        h(1,i)=h(1,i)+1;
    end
end
H(1)=0;
for i=2:256
    H(i)=H(i-1)+h(1,i);
end
figure('Name','Histograma','NumberTitle','off')
plot(H);
end