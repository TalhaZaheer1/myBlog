import { useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { Input, RTE, Select, Button } from "./index";
import { useNavigate } from "react-router-dom";
import databaseService from "../appwrite/database";
import { useCallback, useEffect } from "react";

export default function PostForm(post) {
  const navigate = useNavigate();
  const { register, handleSubmit, control, setValue, watch, getValues } =
    useForm({
      defaultValues: {
        title: post?.title || "",
        slug: post?.slug || "",
        content: post?.content || "",
        status: post?.status || null,
      },
    });

  const userData = useSelector((state) => state.auth.userData);

  const submit = async (data) => {
    if (post) {
      const file = data.image[0]
        ? await databaseService.uploadFile(data.image[0])
        : null;
      if (file) await databaseService.deleteFile(post.featuredImage);

      const dbPost = await databaseService.updateDoc(post.$id, {
        ...data,
        featuredImage: file ? file.$id : undefined,
      });
      if (dbPost) {
        navigate(`/post/${dbPost.$id}`);
      }
    } else {
      const file = await databaseService.uploadFile(data.image[0]);

      if (file) {
        data.featuredImage = file.$id;
        const dbPost = await databaseService.createDoc({
          ...data,
          status: true,
          userId: userData.$id,
        });
      }
      if (dbPost) navigate(`/post/${dbPost.$id}`);
    }
  };

  const slugTransform = useCallback((value) => {
    if (typeof value === "string")
      return value.trim().toLowerCase().replace(/\s/g, "-");
  }, []);

  useEffect(() => {
    const subscribe = watch((value, { name }) => {
      if (name === "title")
        setValue("slug", slugTransform(value.title), { shouldValidate: true });
    });

    return () => {
      subscribe.unsubscribe();
    };
  }, [watch, setValue, slugTransform]);

  return;
}
